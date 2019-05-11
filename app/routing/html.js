const path = require("path");

module.exports = function(app) {
  // if user enters survey in URL or presses survey button, serves the survey HTML file
  app.get("/survey", function(req, resp) {
    resp.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // fallback use route for homepage
  app.use(function(req, resp) {
    resp.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};
