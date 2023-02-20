import mysql from "mysql2";
var config = {
  host: "localhost",
  user: "root",
  password: "1234567",
  database: "ayd1_p1_g1",
  port: 3306,
};
const conn = new mysql.createConnection(config);

export default conn;