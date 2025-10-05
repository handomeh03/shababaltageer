import mysql from "mysql2/promise";

let pool;

async function initdb() {
  if (pool) {
    return pool;
  }

  try {
  
    // if (process.env.DATABASE_URL) {
    //   pool = mysql.createPool(process.env.DATABASE_URL + "?connectionLimit=10");
    // } else {
      
      pool = mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        port: process.env.DB_PORT || 3306,
        waitForConnections: true,
        connectionLimit: 10,   
        queueLimit: 0          
      });
    // }

    console.log(" MySQL connection pool created successfully");
    return pool;
  } catch (error) {
    console.error(" Error creating MySQL pool:", error);
    throw new Error("Error connecting to database");
  }
}

export default initdb;
