const Todo = require("../models/todo");


exports.createToDo=async(req,res)=>{
    try{
        const{title,description}=req.body;

        const response=await todo.create({title,description});
        

        res.status(200).json(
            {
                success:true,
                data:response,
                message:'Entry Created Succesfully'
            }
        );
        
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