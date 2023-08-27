const express = require("express");
const router =express.Router();


const {createToDo} = require("../controllers/createToDo");
const {getToDo,getTodoById} = require("../controllers/getTodo");
const{updateTodo}=require("../controllers/updateTodo");
const{deleteTodo}=require("../controllers/deleteTodo");


router.post("/createToDo",createToDo);
router.get("/getTodo",getToDo);
router.get("/getTodo/:id",getTodoById);
router.put("/updateTodo/:id",updateTodo);
router.delete("/deleteTodo/:id",deleteTodo);

module.exports = router;