import initdb from "../db/connection.js";

export async function getAllEvents(req, res) {
  try {
    let db = await initdb();

    let [row] = await db.execute("SELECT * FROM events ORDER BY event_id DESC");

    if (row.length == 0) {
      res.status(200).send({ events: [] });
    }

    return res.status(200).send({ events: row });
  } catch (error) {
    console.log(error);

    res.status(500).send({ error: "internel server error" });
  }
}
export async function deleteEvent(req, res) {
  let { id } = req.params;

  if (isNaN(Number(id))) {
    return res.status(400).send({ error: "id not a number" });
  }

  try {
    let db = await initdb();
    let [row] = await db.execute("select * from events where event_id = ?", [
      id,
    ]);
    if (row.length == 0) {
      return res.status(404).send({ error: "event not found" });
    }

    await db.execute("delete from events where event_id = ?", [id]);
    return res.status(200).send({ deletedEvent: row[0] });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "internel server error" });
  }
}
export async function addEvent(req, res) {
  let { name, location, description, image, status, number_of_members, price } =
    req.body;
  try {
    let db = await initdb();

    let [result] = await db.execute(
      "INSERT INTO events  (name, location, description, image, status, number_of_members, price) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, location, description, image, status, number_of_members, price]
    );
    console.log(result.insertId);

    let [row] = await db.execute("select * from events where event_id = ? ", [
      result.insertId,
    ]);

    return res.status(201).json({ event: row[0] });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error: "internel server error" });
  }
}
export async function editEvent(req, res) {
  let { id: event_id } = req.params;
  let { name, location, description, image, status, number_of_members, price } =
    req.body;
  if (isNaN(Number(event_id))) {
    return res.status(400).send({ error: "id not a number" });
  }

  try {
    let db = await initdb();
    let [row] = await db.execute("select * from events where event_id = ? ", [
      event_id,
    ]);
    if (row.length == 0) {
      return res.status(400).send({ error: "event not found" });
    }
    let [result] = await db.execute(
      "UPDATE events SET name = ?, location = ?, description = ?, image = ?, status = ?, number_of_members = ?, price = ? WHERE event_id = ?",
      [
        name,
        location,
        description,
        image,
        status,
        number_of_members,
        price,
        event_id,
      ]
    );

    if (result.affectedRows === 0) {
      return res.status(400).send({ error: "update failed" });
    }

    let [updateedEvent] = await db.execute(
      "select * from events where event_id = ? ",
      [event_id]
    );
    return res.status(200).send({ event: updateedEvent[0] });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: "internel server error" });
  }
}
export async function getMyEvent(req, res) {
  let { id } = req.user;

  try {
    let db = await initdb();

    
    let [myevent] = await db.execute(
      `SELECT e.event_id, e.name, e.location
       FROM events AS e 
       JOIN userevent AS ue 
       ON e.event_id = ue.event_id 
       WHERE ue.user_id = ?`,
      [id]
    );

    if (myevent.length === 0) {
      return res.status(404).send({ error: "no event found" });
    }

    return res.status(200).send({ myevent });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "internal server error" });
  }
}

