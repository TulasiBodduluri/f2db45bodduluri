const mongoose = require("mongoose")
const employeeSchema = mongoose.Schema({
    ID: String,
    age: String,
    salary: Number
})

module.exports = mongoose.model("Employee", employeeSchema) 