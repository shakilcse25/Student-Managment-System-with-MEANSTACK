var mongoose = require('mongoose');

var student_payment = new mongoose.Schema({
  student_id: String,
  payment_type: String,
  amount: String,
  mrc_no: String,
  payment_date:String,
  remark:{type:String,required : false}
});

module.exports = mongoose.model('payment_collection', student_payment);
