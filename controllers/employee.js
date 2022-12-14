var Employee = require('../models/employee'); 
 // List of all Costumes 
exports.employee_list = async function(req, res) { 
    try{ 
        theEmployees = await Employee.find(); 
        res.send(theEmployees); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};

// VIEWS 
// Handle a show all view 
exports.employee_view_all_Page = async function(req, res) { 
    try{ 
        theEmployees = await Employee.find(); 
        res.render('employee', { title: 'Employee Search Results', results: theEmployees }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// for a specific Costume. 
//exports.employee_detail = function(req, res) { 
 //   res.send('NOT IMPLEMENTED: Employee detail: ' + req.params.id); 
//}; 
// for a specific Costume. 
exports.employee_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await Employee.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle Costume create on POST. 
//exports.employee_create_post = function(req, res) { 
    //res.send('NOT IMPLEMENTED: Employee create POST'); 
//};

exports.employee_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new Employee(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"costume_type":"goat", "cost":12, "size":"large"} 
    document.ID = req.body.ID; 
    document.age = req.body.age; 
    document.salary = req.body.salary; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Costume delete form on DELETE.
//exports.employee_delete = function(req, res) { 
    //res.send('NOT IMPLEMENTED: Employee delete DELETE ' + req.params.id); 
//}; 

// Handle Costume delete on DELETE. 
exports.employee_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await Employee.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle Costume update form on PUT. 
//exports.employee_update_put = function(req, res) { 
 //   res.send('NOT IMPLEMENTED: Employee update PUT' + req.params.id); 
//};
// Handle Costume update form on PUT. 
exports.employee_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await Employee.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.ID)  
               toUpdate.ID = req.body.ID; 
        if(req.body.age) toUpdate.age = req.body.age; 
        if(req.body.salary) toUpdate.salary = req.body.salary; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
}; 
// Handle a show one view with id specified by query 
exports.employee_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await Employee.findById( req.query.id) 
        res.render('employeedetail',  
{ title: 'Employee Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a costume. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.employee_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('employeecreate', { title: 'Employee Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a costume. 
// query provides the id 
exports.employee_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await Employee.findById(req.query.id) 
        res.render('employeeupdate', { title: 'Employee Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.employee_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await Employee.findById(req.query.id) 
        res.render('employeedelete', { title: 'Employee Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 