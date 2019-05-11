const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "app/public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

require(path.join(__dirname, "./app/routing/api"))(app);
require(path.join(__dirname, "./app/routing/html"))(app);

app.listen(PORT, () => console.log("Running on http://localhost: " + PORT));
