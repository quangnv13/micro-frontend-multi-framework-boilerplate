const express = require("express");
const app = express();
const cors = require("cors");
const port = 9000;

app.use(cors());
app.use(express.static("."));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
