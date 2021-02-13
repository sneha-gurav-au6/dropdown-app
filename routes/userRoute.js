const express = require("express");
const router = express.Router();
const { userName } = require("../controller/apiController/userApiController");

router.get("/user-name", userName);

module.exports = router;
