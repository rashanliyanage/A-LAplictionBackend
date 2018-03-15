const mongoose = require('mongoose');



var StudentSchema = mongoose.Schema(
    {  
        fullName:{type:String},
        userName:{type:String,unique:true},
        password:{type:String},
        phoneNumber:{type:String},
        address:{type:String},
        province:{type:String},
        stream:{type:String}


    });

const Student = module.exports =mongoose.model('Student',StudentSchema);