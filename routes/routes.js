const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const employee_controller = require('../controllers/employee.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', employee_controller.test);
router.post('/create', employee_controller.employee_create);
router.get('/:employee_id', employee_controller.employee_details_by_id);
router.get('/:employee_name/name', employee_controller.employee_details_by_name);
router.put('/:employee_id/update', employee_controller.employee_update);
router.delete('/:employee_id/delete', employee_controller.employee_delete);


module.exports = router;