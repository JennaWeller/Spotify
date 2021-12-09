const express = require("express");
const app = express();

// set up database connection

const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "spotifydatabase.cluster-ro-cy7fbxd5xdmz.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "password1",
    database: "password1",
    port: 3306,
  },
});
app.get("/", (req, res) => {
  knex
    .select()
    .from("albums")
    .then((result) => {
      console.log(result);
      res.send(result);
    });
});
app.listen(3000);
