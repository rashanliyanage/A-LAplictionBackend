const mongoose = require('mongoose');

var PaperSchema = mongoose.Schema(
    {
        
        subjectId:{type:String,unique:true},
        yearOfPaper:{type:String},
       mcqQuestion:[
                    {
                        questionNumber:{type:String},
                        topicOfQuetion:{type:String},
                        available:{type:Boolean,default:false},
                        adminAnswerPath:{type:String,unique:true},
                        anminAnswerVideoPath:{type:String,unique:true},
                        teacherAnswer:[
                                         {
                                             teacherId:{type:String},
                                             teacherVideoPath:{type:String,unique:true},
                                             uploadeDate:{type: Date, default: Date.now},
                                             expireDate:{type: Date},
                                             teacherAnswerDiscriptionPath:{type:String},
                                             commentsAboutTeacherAnswer:[
                                                                            {
                                                                                userId:{type:String},
                                                                                comment:{type:String},
                                                                                commentDate:{type: Date, default: Date.now},
                                                                                isChild:{type:Boolean}
                                                                            }

                                                                        ]

                                         }




                                       ]


                    }



                 ]


    });


    const paperSchema = module.exports =mongoose.model('ParerCollecton',PaperSchema);
