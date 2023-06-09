const express = require("express");
const routes = require("./routes");

// Import the connection object
const sequelize = require("./config/connection");

// sync sequelize models to the database, then turn on the server

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Connect to the database before starting the Express.js server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    console.log(process.env.DB_NAME);
  });
});
