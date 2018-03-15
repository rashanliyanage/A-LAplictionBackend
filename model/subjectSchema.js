const mongoose = require('mongoose');

var subjectSchema = mongoose.Schema(
    {
        subjectName:{type:String,unique:true},
        streame:{type:String}
        


    });
