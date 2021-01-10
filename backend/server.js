const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;
app.disable("x-powered-by");
app.use(cors({ credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var Users = require("./routes/events");

app.use("/events", Users);

app.use(express.static(__dirname + "/public"));
app.listen(port, () => {
  console.log(`server is running on port ${port}` )
});

