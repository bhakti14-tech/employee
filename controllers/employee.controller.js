const Employee = require('../models/databaseModel');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Employee Management Service!');
};

exports.employee_create = async function (req, res) {
    let employee = new Employee(
        {
        employee_id: req.body.eid,
        employee_name: req.body.name,
        employee_dob: req.body.dob,
        employee_designation: req.body.designation,
        employee_salary: req.body.salary,
        }
    );

    await employee.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Employee Created successfully')
    })
};

exports.employee_details_by_id = function (req, res) {
    Employee.find({ employee_id: req.params.employee_id }, function (err, employee) {
        if (err) return next(err);
        res.send(employee);
    })
};

exports.employee_details_by_name = function (req, res) {
    Employee.find({ employee_name: req.params.employee_name }, function (err, employee) {
        if (err) return next(err);
        res.send(employee);
    })
};



exports.employee_update = function (req, res) {
Employee.updateOne({ employee_id: req.params.employee_id }, {$set: req.body}, function (err, employee) {
        if (err) return next(err);
        res.send('employee udpated.');
    });
};

exports.employee_delete = function (req, res) {
    Employee.deleteOne({ employee_id: req.params.employee_id }, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    })
};

