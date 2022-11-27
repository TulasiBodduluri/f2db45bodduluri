const mongoose = require("mongoose")
const employeeSchema = mongoose.Schema({
    ID: {
        type: String,
        maxLength: 7,
    },
    age:{
        type: String,
        minLength: 2
    },
    salary: Number
})

module.exports = mongoose.model("Employee", employeeSchema) 