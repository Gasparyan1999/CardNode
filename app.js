import express, { query } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import pool from "./Data/data.js";

const PORT = process.env.port || 3000;
const app = express();
app.use(cors());

app.use(bodyParser.json());

app.get("/", async function (req, res) {
  const cards = await pool.query("SELECT * FROM cards");
  console.log(cards.rows);
  res.send(cards.rows);
});

app.post("/", async function (req, res) {
  if (req.body[0].num) {
    const value = [req.body[0].id, req.body[0].num];
    const card = await pool.query(
      `INSERT INTO cards VALUES
      ('${value[0]}'::text,'${value[1]}'::integer) RETURNING *`
    );
    res.json(card.rows);
  } else {
    const value = [req.body[0]];
    const card = await pool.query(`DELETE FROM cards WHERE id = '${value}'`);
    res.json(card.rows);
  }
});

app.listen(PORT, () => {
  console.log(`Server start in ${PORT}`);
});
