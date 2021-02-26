const mongoose=require('mongoose');


const count= mongoose.Schema({
    Add:{
        type:Number,
        defaultValue:1
    },
    Update:{
        type:Number,
        defaultValue:0
    },

})


module.exports=mongoose.model("count",count);