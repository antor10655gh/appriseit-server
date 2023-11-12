const express = require("express");
const app = express.Router();

const adminController = require("../../controllers/admin.controller");

app.post("/register", adminController.adminRegister);
app.post("/login", adminController.adminLogin);

module.exports = app;
