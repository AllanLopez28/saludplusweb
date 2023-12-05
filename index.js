const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const errorHandler = require('./middlewares/error.middleware');
const saludplusRouter = require('./routes/saludplus.router');

// Configuración del puerto
const PORT = process.env.PORT || 3001;

// Middleware para analizar solicitudes JSON
app.use(bodyParser.json());

// Conexión a la base de datos MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.error("MongoDB connection error:", error));

// Rutas principales
app.use('/api', saludplusRouter);

// Middleware para manejar errores
app.use(errorHandler);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
