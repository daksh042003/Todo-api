const Todo = require("../models/todo");


exports.getToDo=async(req,res)=>{
    try{

        const todos= await Todo.find({}); 
        
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




exports.getTodoById=async(req,res)=>{
    try{
         
        const id=req.params.id;

        const todobyid= await Todo.findById({_id:id}); 
       
        if(!todobyid){
            return  res.status(404).json({
                success:false,
                message:"no data found with given id "
            })
        }

        res.status(200)
        .json({
            success:true,
            data:todobyid,
            message:`todo ${id} data successfully fetched`,
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
