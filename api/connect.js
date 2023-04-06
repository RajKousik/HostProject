// import mysql from "mysql"
import mysql from "mysql"

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"welC0me$",
  database:"devrev"
})