const mongoose=require('mongoose');


const dataSchema= mongoose.Schema({
    firstName:{
        type:"string",
        required:true
    },
    lastName:{
        type:"string",
        required:true
    },

})


module.exports=mongoose.model("data",dataSchema);