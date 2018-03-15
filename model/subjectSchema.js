const mongoose = require('mongoose');

var subjectSchema = mongoose.Schema(
    {
        subjectName:{type:String,unique:true},
        streame:{type:String},
        subStreamOne:{type:String},
        subStreamTwo:{type:String}


    });

    const Subject = module.exports =mongoose.model('Subject',subjectSchema);
