import mysql from "mysql2";
var config = {
  host: "sql9.freemysqlhosting.net",
  user: "sql9599844",
  password: "T1Bpcsz7y5",
  database: "sql9599844",
  port: 3306,
};
const conn = new mysql.createConnection(config);

export default conn;