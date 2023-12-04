require("dotenv").config();
const express = require("express");
const debug = require("debug")("saludPlus-api:server");
const morgan = require("morgan");
const cors = require("cors");

const envconfig = require("./config/env.config");
const database = require("./config/db.config");
const mainRouter = require("./routes/main.router");
const {errorHandler} = require("./middlewares/error.middleware"); 

const app = express();
const port = envconfig.PORT;
app.listen(port, () => {
  debug(`Server is running on port ${port}`);
});

database.connect();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/api/v1", mainRouter);
app.use(errorHandler);


