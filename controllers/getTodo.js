const Todo = require("../models/todo");


exports.getToDo=async(req,res)=>{
    try{

        const todos= await todo.find({}); 
        
        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"entire todo data is fetched.."
        })
        
    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json({
            success:false,
            data:"internal server error",
            message:err.message,
        })
    }
} 
