var mongoose = require('mongoose');
Schema = mongoose.Schema;

var courseSchema = new Schema({
    course_name: {type:String,required:false},
    course_code: {type:String,required:false},
    dept: {type:String,required:false}
});

module.exports = mongoose.model('allcourse', courseSchema);