const path = require("path");

module.exports = function(req, resp) {
  switch (req.url) {
    case "/":
      response.sendFile(path.join(_dirname, "/../public/home.html"));
      break;

    case "/survey":
      response.sendFile(path.join(_dirname, "/../public/survey.html"));
      break;

    case "/results":
      response.sendFile(path.join(_dirname, "/../public/results.html"));
      break;
    default:
      response.status(404).send("404");
  }
};
