const express = require("express");
const router = express.Router();
const saludPlusRouter = require("./saludplus.router");
router.use("/saludplus", saludPlusRouter);

module.exports = router;