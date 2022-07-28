const express = require('express')  
const router = express.Router()  
const { poolPromise } = require('../DBconnection/StudInforDB')  
const sql = require('mssql') 


router.get('/ApiStudentGet', async (req, res) => {  
try {  
const pool = await poolPromise 


const result = await pool.request()  
.query("select name1, name2, surname studentNo from StudentInfo where gender = 'F' AND campusCode = '1' and posttown = 'Sebokeng'",function(err, studentset){  
if (err)  
{  
console.log(err)  
}  
else {  
var send_data = studentset.recordset;  
res.json(send_data);  
}  
})  
} catch (err) {  
res.status(500)  
res.send(err.message)  
}  
})  


router.post('/ApiStudentpost', async (req, res) => {  
    try {  
    const pool = await poolPromise 
    
    
    const result = await pool.request()  
    .query("select name1, name2, surname studentNo from StudentInfo where gender = 'F' AND campusCode = '1' and posttown = 'Sebokeng'",function(err, studentset){  
    if (err)  
    {  
    console.log(err)  
    }  
    else {  
    var send_data = studentset.recordset;  
    res.json(send_data);  
    }  
    })  
    } catch (err) {  
    res.status(500)  
    res.send(err.message)  
    }  
    }) 




module.exports = router;