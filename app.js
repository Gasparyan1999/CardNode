import express, { query } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pool from "./Data/data.js";

const PORT = process.env.port || 3000;
const app = express();
app.use(cors());

app.use(bodyParser.json());

app.get("/", async function (req, res) {
  const users = await pool.query("SELECT * FROM mytable");
  res.send(users.rows);
});

app.get("/:id", async function (req, res) {
  const user = await pool.query(
    `SELECT * FROM mytable WHERE id=${req.params["id"]}`
  );
  res.send(user.rows);
});

app.post("/", async function (req, res) {
  const value = [
    req.body[0][1],
    req.body[1][1],
    req.body[2][1],
    req.body[3][1],
    req.body[4],
  ];
  const user = await pool.query(
    `INSERT INTO mytable VALUES
    ('${value[4]}'::integer,'${value[0]}'::text, '${value[1]}'::text,'${value[2]}'::text, '${value[3]}'::text) RETURNING *`
  );
  res.json(user.rows);
});

app.listen(PORT, () => {
  console.log(`Server start in ${PORT}`);
});


