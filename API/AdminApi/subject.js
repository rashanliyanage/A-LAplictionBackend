var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
var Subject =require('../../model/subjectSchema');

router.post('/addNewSubject',function(req,res){
    console.log('in subject');
    console.log(stream );
    var subject =req.body.subject;
    var stream  =req.body.stream;
    var newSubject =new Subject();
    if(subject=="PHYSICS" || subject =="CHEMISTY"){
        newSubject.subjectName =subject;
        newSubject.subStreamOne ="COMBINED MATHS";
        newSubject.subStreamTwo ="BIO SCIENCE";
        newSubject.streame =stream;
        addNewSubjectFunction(newSubject,res);
    }else if(subject =="PURE MATHS" || subject =="APPLIED MATHS"){
        newSubject.subjectName =subject;
        newSubject.subStreamOne ="COMBINED MATHS";
        newSubject.streame = stream;
        addNewSubjectFunction(newSubject,res);
    
    } else if(subject =="BIO SCIENCE"){
        newSubject.subjectName =subject;
        newSubject.subStreamOne ="BIO SCIENCE";
        newSubject.streame =stream;
        addNewSubjectFunction(newSubject,res);
    } else{      
        newSubject.subjectName =subject;
        newSubject.streame =stream;
        addNewSubjectFunction(newSubject,res);
    }
});

var addNewSubjectFunction =function(newSubject,res){

    newSubject.save(function(err,addedSubject){
        if(err){
            res.statusCode =500;
            res.json({
                    code:500,
                    message:'internal server error'
            });
        

        }else if(addedSubject){

            res.statusCode =200;
            res.json({
                code:200,
                message:"subject is successfully added"

            });

        }

});

}

router.get('/getExixtSubject',function(req,res){
    console.log('get all subject api');
    Subject.find({},function(err,subjects){
        if(err){
            res.statusCode =500;
        }else {
                res.statusCode =200;
            res.json({
                code:"200",
                message:"successfully get subject",
                subjects:subjects

            });
        }
    });
});

router.post('/deleteSubject',function(req,res){
    var subjectId =req.body.subjectId; 
    
    Subject.remove({_id:subjectId},function(err,subject){
        if(err){
            res.statusCode =500;
            res.json({
                message:"internal server error"
            });

        }else {
            res.statusCode =200;
            res.json({
                message:"successfully delete"
            });
        }
    });

});






module.exports.adminSubjec =router;