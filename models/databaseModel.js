const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EmployeeSchema = new Schema({
   employee_id: {type: Number, required: true},
   employee_name: {type: String, required: true, max: 100},
   employee_dob: {type: Date, required: true},
   employee_designation: {type: String, required: true, max: 100},
   employee_salary: {type: Number, required: true},
});


// Export the model
module.exports = mongoose.model('Employee', EmployeeSchema);