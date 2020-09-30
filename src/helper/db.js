const mysql = require('mysql')

//connect database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zwallet'
})
conn.connect((err)=>{
    if(!err) console.log('MySql connected')
    else console.log('Failed to connect database')
})

module.exports = conn