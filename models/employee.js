const mongoose = require("mongoose")
const employeeSchema = mongoose.Schema({
    ID: {
        type: String,
        maxLength: 7
    },
    age: String,
    salary: Number
})

module.exports = mongoose.model("Employee", employeeSchema) 