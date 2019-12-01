var mongoose = require('mongoose');
// const arrayUniquePlugin = require('mongoose-unique-array');
Schema = mongoose.Schema;

var student_inforSchema = new Schema({
  subject: String,
  batch: String,
  program: String,
  year: String,
  dept_id: {type:String},
  dept: String,
  semester: String,
  admission_date: {type:Date},
  password: String,


  basic_info: {
    name: {type: String,required: true},
    phone: {type: String,required: false},
    father_name: {type: String,required: false},
    father_phone: {type: String,required: false},
    mother_name: {type: String,required: false},
    mother_phone: {type: String,required: false},
    Birth_cirtificate: {type: String,required: false},
    blood_group: {type: String,required: false},
    gender: {type: String,required: false},
    religion: {type: String,required: false},
    marital: {type: String,required: false},
    date_of_birth: {type: String,required: false},
    per_vil: {type: String,required: false},
    per_road: {type: String,required: false},
    per_post_ofice: {type: String,required: false},
    per_thana: {type: String,required: false},
    per_upozila: {type: String,required: false},
    per_district: {type: String,required: false},
    pre_vil: {type: String,required: false},
    pre_road: {type: String,required: false},
    pre_post_ofice: {type: String,required: false},
    pre_thana: {type: String,required: false},
    pre_upozila: {type: String,required: false},
    pre_district: {type: String,required: false}
  },


  educational_info: {
    ssc_board: {type: String,required: false},
    ssc_reg: {type: String,required: false},
    ssc_pass_year: {type: String,required: false},
    ssc_mark_obtain: {type: String,required: false},
    ssc_grade: {type: String,required: false},
    hsc_board: {type: String,required: false},
    hsc_reg: {type: String,required: false},
    hsc_pass_year: {type: String,required: false},
    hsc_mark_obtain: {type: String,required: false},
    hsc_grade: {type: String,required: false},
    dip_board: {type: String,required: false},
    dip_reg: {type: String,required: false},
    dip_pass_year: {type: String,required: false},
    dip_mark_obtain: {type: String,required: false},
    dip_grade: {type: String,required: false},
    school_name: {type: String,required: false},
    collage_name: {type: String,required: false}
  },

  billing_info: {
  admission_fee: {type: Number,required: false},
  semester_fee: {type: Number,required: false},
  establishment_fee: {type: Number,required: false},
  security_refoundable: {type: Number,required: false},
  term_reg: {type: Number,required: false},
  tution_fee: {type: Number,required: false},
  library_fee: {type: Number,required: false},
  student_activities: {type: Number,required: false},
  total_init: {type: Number,required: false},
  mrc_no: {type: Number,required: false},
  remark: Boolean
  },

  //quata
  quata: {type: String,required: false},

  result: {
    cgpa:{type:Number,default:0,required:false},  
      first:
      {
          subject :[
            {
              subject_name:{type:String,required:false},
              subject_code:{type:String,required:false},
              subject_point:{type:Number,required:false},
              subject_grade:{type:String,required:false}
            }
          ],
          currentsemester:{type:String,required:false,default:'1st'},
          currentgpa: {type:Number,required : false,default:0},
          sgpa:{type:Number,required:false,default:0},
          total_credit:{type:Number,required:false,default:0},
          earn_credit:{type:Number,required:false,default:0},
          status:{type:String,required:false,default:'Null'},
          sem_code:{type:String,required:false,default:'1'}
      },

      second:
      {
          subject :[
            {
              subject_name:{type:String,required:false},
              subject_code:{type:String,required:false},
              subject_point:{type:Number,required:false},
              subject_grade:{type:String,required:false}
            }
          ],
          currentsemester:{type:String,required:false,default:'2nd'},
          currentgpa: {type:Number,required : false,default:0},
          sgpa:{type:Number,required:false,default:0},
          total_credit:{type:Number,required:false,default:0},
          earn_credit:{type:Number,required:false,default:0},
          status:{type:String,required:false,default:'Null'}
      },

      third:
      {
          subject :[
            {
              subject_name:{type:String,required:false},
              subject_code:{type:String,required:false},
              subject_point:{type:Number,required:false},
              subject_grade:{type:String,required:false}
            }
          ],
          currentsemester:{type:String,required:false,default:'3rd'},
          currentgpa: {type:Number,required : false,default:0},
          sgpa:{type:Number,required:false,default:0},
          total_credit:{type:Number,required:false,default:0},
          earn_credit:{type:Number,required:false,default:0},
          status:{type:String,required:false,default:'Null'}
      },

      fourth:
      {
          subject :[
            {
              subject_name:{type:String,required:false},
              subject_code:{type:String,required:false},
              subject_point:{type:Number,required:false},
              subject_grade:{type:String,required:false}
            }
          ],
          currentsemester:{type:String,required:false,default:'4th'},
          currentgpa: {type:Number,required : false,default:0},
          sgpa:{type:Number,required:false,default:0},
          total_credit:{type:Number,required:false,default:0},
          earn_credit:{type:Number,required:false,default:0},
          status:{type:String,required:false,default:'Null'}
      },

      fifth:
      {
          subject :[
            {
              subject_name:{type:String,required:false},
              subject_code:{type:String,required:false},
              subject_point:{type:Number,required:false},
              subject_grade:{type:String,required:false}
            }
          ],
          currentsemester:{type:String,required:false,default:'5th'},
          currentgpa: {type:Number,required : false,default:0},
          sgpa:{type:Number,required:false,default:0},
          total_credit:{type:Number,required:false,default:0},
          earn_credit:{type:Number,required:false,default:0},
          status:{type:String,required:false,default:'Null'}
      },

      sixth:
      {
          subject :[
            {
              subject_name:{type:String,required:false},
              subject_code:{type:String,required:false},
              subject_point:{type:Number,required:false},
              subject_grade:{type:String,required:false}
            }
          ],
          currentsemester:{type:String,required:false,default:'6th'},
          currentgpa: {type:Number,required : false,default:0},
          sgpa:{type:Number,required:false,default:0},
          total_credit:{type:Number,required:false,default:0},
          earn_credit:{type:Number,required:false,default:0},
          status:{type:String,required:false,default:'Null'}
      },

      seventh:
      {
          subject :[
            {
              subject_name:{type:String,required:false},
              subject_code:{type:String,required:false},
              subject_point:{type:Number,required:false},
              subject_grade:{type:String,required:false}
            }
          ],
          currentsemester:{type:String,required:false,default:'7th'},
          currentgpa: {type:Number,required : false,default:0},
          sgpa:{type:Number,required:false,default:0},
          total_credit:{type:Number,required:false,default:0},
          earn_credit:{type:Number,required:false,default:0},
          status:{type:String,required:false,default:'Null'}
      },

      eighth:
      {
          subject :[
            {
              subject_name:{type:String,required:false},
              subject_code:{type:String,required:false},
              subject_point:{type:Number,required:false},
              subject_grade:{type:String,required:false}
            }
          ],
          currentsemester:{type:String,required:false,default:'8th'},
          currentgpa: {type:Number,required : false,default:0},
          sgpa:{type:Number,required:false,default:0},
          total_credit:{type:Number,required:false,default:0},
          earn_credit:{type:Number,required:false,default:0},
          status:{type:String,required:false,default:'Null'}
      }

  }

});

// student_inforSchema.plugin(arrayUniquePlugin);


module.exports = mongoose.model('student', student_inforSchema);
