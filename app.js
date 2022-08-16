const arr = [
  {
    id: "1",
    name: "John",
    create: "05-07-2012",
    owner: "User1",
  },
  {
    id: "2",
    name: "Alis",
    create: "15-02-2010",
    owner: "User2",
  },
  {
    id: "3",
    name: "Max",
    create: "14-08-2015",
    owner: "User3",
  },
  {
    id: "4",
    name: "Messi",
    create: "17-02-2002",
    owner: "User4",
  },
  {
    id: "5",
    name: "Ronaldo",
    create: "16-08-2015",
    owner: "User5",
  },
  {
    id: "6",
    name: "Benzema",
    create: "21-03-2004",
    owner: "User6",
  },
  {
    id: "7",
    name: "Xavi",
    create: "01-01-2000",
    owner: "User7",
  },
];

const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(bodyParser.json());

app.get("/", function (req, res) {
  req.body = arr;
  res.send(req.body);
});

// app.post("/", function (req, res) {
//   if(req.body.number!==undefined){
//     arr.push(req.body=arr)
//     res.send(req.body)
//   }
// });

app.listen(3000);