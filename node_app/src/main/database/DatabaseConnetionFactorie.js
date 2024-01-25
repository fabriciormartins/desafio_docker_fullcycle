require('dotenv').config();
const mysql = require("mysql")

class DatabaseConnetionFactorie  {

   static getConnection = () => {
        const user = process.env.MYSQL_USER || 'root';
        const pass = process.env.MYSQL_PASSWORD || '123456';
        const database = process.env.MYSQL_DATABASE || 'pessoa';
        const host = process.env.MYSQL_HOST || 'localhost';
        const connection = mysql.createConnection( {
            host: host,
            user: user,
            password: pass,
            database: database
        })
        return connection;
    };


}
module.exports = DatabaseConnetionFactorie;

