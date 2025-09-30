import mysql from "mysql2/promise"; 
let connection;
async function initdb() {
    if (connection) {
        return connection;
    }

    try {
        connection = await mysql.createConnection({
            host: process.env.DB_HOST,     
            user: process.env.DB_USER,        
            password: process.env.DB_PASSWORD,  
            database: process.env.DB_DATABASE,
            port:process.env.DB_PORT
        });

        console.log("Connection is succesfull");
        return connection;
    } catch (error) {
        console.error(" Error connecting :", error);
        throw new Error("Error connecting to database");
    }
}

export default initdb;
