const { json } = require("express");
const fs = require("fs");
const EmployeeSchema = require("../Utility/DataAuthentication");
const { StringToArrayConvert } = require("../Utility/StringToArrayConvert");
let id = 1;

// get all employees data
module.exports.getEmployees = async (req, res) => {
  try {
    fs.readFile("./Model/employee.txt", "utf8", (err, employeesString) => {
      if (err) {
        res.status(500).json({ message: "No data found" });
      } else {
        const employees = StringToArrayConvert(employeesString);
        res.status(200).json(employees);
      }
    });
  } catch (err) {
    res.status(502).json(err);
  }
};

// get a single employee data
module.exports.getEmployeeById = async(req, res)=>{
  try{
    fs.readFile('./Model/employee.txt', "utf8", (err, employeesString) => {
      if(err){
        res.status(500).json({ message: "No data found" });
      }
      else{
        const employees = StringToArrayConvert(employeesString);
        const employee = employees.filter(em=>em.ID==req.params.id);
        if(employee.length>0){
          res.status(200).json(employee[0]);
        }
        else{
          res.status(404).json({ message: "No Employee found by this id" });
        }
      }
    })
    console.log(req.params.id)
  }catch(err){
    res.status(500).json(err);
  }
}

// set employee data
module.exports.setEmployee = async (req, res) => {
  try {
    try {
      const employee = await EmployeeSchema.validateAsync({
        ...req.body,
        ID: id,
      });
      id++;
      fs.writeFile(
        "./Model/employee.txt",
        `${JSON.stringify(employee)}\n`,
        { flag: "a+" },
        (err, data) => {
          if (err) {
            res.status(500).json({ message: "Can not create employee." });
          } else {
            res
              .status(200)
              .json({ message: "Successfully created the employee." });
          }
        }
      );
    } catch (err) {
      res.status(500).json({ message: err.details[0].message });
    }
  } catch (err) {
    res.status(502).json(err);
  }
};
