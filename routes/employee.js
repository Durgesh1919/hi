// const express = require('express');
// const router = express.Router();
// const Employee = require('../models/Employee');

// // Create a new employee
// router.post('/', async (req, res) => {
//   try {
//     const employee = new Employee(req.body);
//     await employee.save();
//     res.status(201).send(employee);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // Get all employees
// router.get('/', async (req, res) => {
//   try {
//     const employees = await Employee.find();
//     res.status(200).send(employees);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // Get an employee by ID
// router.get('/:id', async (req, res) => {
//   try {
//     const employee = await Employee.findById(req.params.id);
//     if (!employee) {
//       return res.status(404).send();
//     }
//     res.status(200).send(employee);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // Update an employee
// router.put('/:id', async (req, res) => {
//   try {
//     const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
//     if (!employee) {
//       return res.status(404).send();
//     }
//     res.status(200).send(employee);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// // Delete an employee
// router.delete('/:id', async (req, res) => {
//   try {
//     const employee = await Employee.findByIdAndDelete(req.params.id);
//     if (!employee) {
//       return res.status(404).send();
//     }
//     res.status(200).send(employee);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');

// Create a new employee
router.post('/', async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).send(employee);
  } catch (err) {
    res.status(400).send(err);
  }
});

// Get all employees
router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.send(employees);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
