const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(cors());
app.use((req, res) => {
  console.log({
    method: req.method,
    body: req.body,
    params: req.params,
    query: req.query,
  });
  res.send({
    method: req.method,
    body: req.body,
    params: req.params,
    query: req.query,
  });
});

app.listen(8239, () => {
  console.log(">>> LISTENING TO PORT 8239 ( If available ) <<< ");
}); // My phone password JK
