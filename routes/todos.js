const express = require("express");
const router =express.Router();


const {createToDo} = require("../controllers/createToDo");
const {getTodo} = require("../controllers/getTodo");

router.post("/createToDo",createToDo);
router.get("/getTodo",getTodo);

module.exports = router;