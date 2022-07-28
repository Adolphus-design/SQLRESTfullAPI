// DB.js config for your database  
const sql = require('mssql')  
const config = {  
user: 'sa',  
password: '$Pr0kie',  
server: "localhost",  
database: "fin_data",
trustServerCertificate: true
} 

    //connection to the database 
const poolPromise = new sql.ConnectionPool(config)  
.connect()  
.then(pool => {  
console.log('Connected to MSSQL')  
return pool  
}).catch(err => console.log('Database Connection Failed! Bad Config: ', err))  


module.exports = {  
sql, poolPromise  
}  