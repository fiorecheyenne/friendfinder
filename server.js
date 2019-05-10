const express = require("express");
const path = require("path");
const app = require("express"); 

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static(path.resolve(__dirname, "app/public"))); 

const routes = {
    api: require("./app/routes/api")
    html: require(".app/routes/html")
};

app.get("/*", (req, resp) => {
    if (request.url.startsWith("/api")) {
        routes.api.get(req, resp);
    }
    else {
        routes.html(req, resp);
    }
});

app.post("/api", routes.api.post);

app.listen(PORT, () => console.log("Running on http://localhost: " + PORT));