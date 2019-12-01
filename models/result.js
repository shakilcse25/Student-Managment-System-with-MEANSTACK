var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ResultSchema = new Schema({
  cgpa:{type:Number,default:0},  
  semester: [
    {
        subject :[
          {
            subject_name:{type:String,required:false},
            subject_code:{type:String,required:false},
            subject_point:{type:Number,required:false},
            subject_grade:{type:String,required:false}
          }
        ],
        currentsemester:{type:String,required:false},
        currentgpa: {type:Number,required : false},
        sgpa:{type:Number,required:false},
        total_credit:{type:Number,required:false},
        earn_credit:{type:Number,required:false},
        status:{type:String,required:false}
    }
  ]


  // second_Semester: {
  //     subject :[
  //       {
  //         subject_name:{type:String,required:false},
  //         subject_code:{type:String,required:false},
  //         subject_point:{type:Number,required:false},
  //         subject_grade:{type:String,required:false}
  //       }
  //     ],
  //     sgpa:{type:Number,required:false},
  //     total_credit:{type:Number,required:false},
  //     earn_credit:{type:Number,required:false},
  //     status:{type:String,required:false}
  //   },


  // three_Semester: {
  //     subject :[
  //       {
  //         subject_name:{type:String,required:false},
  //         subject_code:{type:String,required:false},
  //         subject_point:{type:Number,required:false},
  //         subject_grade:{type:String,required:false}
  //       }
  //     ],
  //     sgpa:{type:Number,required:false},
  //     total_credit:{type:Number,required:false},
  //     earn_credit:{type:Number,required:false},
  //     status:{type:String,required:false}
  // },

  
  // four_Semester: {
  //     subject :[
  //       {
  //         subject_name:{type:String,required:false},
  //         subject_code:{type:String,required:false},
  //         subject_point:{type:Number,required:false},
  //         subject_grade:{type:String,required:false}
  //       }
  //     ],
  //     sgpa:{type:Number,required:false},
  //     total_credit:{type:Number,required:false},
  //     earn_credit:{type:Number,required:false},
  //     status:{type:String,required:false}
  // },

  
  // five_Semester: {
  //     subject :[
  //       {
  //         subject_name:{type:String,required:false},
  //         subject_code:{type:String,required:false},
  //         subject_point:{type:Number,required:false},
  //         subject_grade:{type:String,required:false}
  //       }
  //     ],
  //     sgpa:{type:Number,required:false},
  //     total_credit:{type:Number,required:false},
  //     earn_credit:{type:Number,required:false},
  //     status:{type:String,required:false}
  // },

  
  // six_Semester: {
  //     subject :[
  //       {
  //         subject_name:{type:String,required:false},
  //         subject_code:{type:String,required:false},
  //         subject_point:{type:Number,required:false},
  //         subject_grade:{type:String,required:false}
  //       }
  //     ],
  //     sgpa:{type:Number,required:false},
  //     total_credit:{type:Number,required:false},
  //     earn_credit:{type:Number,required:false},
  //     status:{type:String,required:false}
  // },

  
  // seven_Semester: {
  //     subject :[
  //       {
  //         subject_name:{type:String,required:false},
  //         subject_code:{type:String,required:false},
  //         subject_point:{type:Number,required:false},
  //         subject_grade:{type:String,required:false}
  //       }
  //     ],
  //     sgpa:{type:Number,required:false},
  //     total_credit:{type:Number,required:false},
  //     earn_credit:{type:Number,required:false},
  //     status:{type:String,required:false}
  // },

  
  // eight_Semester: {
  //     subject :[
  //       {
  //         subject_name:{type:String,required:false},
  //         subject_code:{type:String,required:false},
  //         subject_point:{type:Number,required:false},
  //         subject_grade:{type:String,required:false}
  //       }
  //     ],
  //     sgpa:{type:Number,required:false},
  //     total_credit:{type:Number,required:false},
  //     earn_credit:{type:Number,required:false},
  //     status:{type:String,required:false}
  // }
  
});
module.exports = mongoose.model('studentresult', ResultSchema);
