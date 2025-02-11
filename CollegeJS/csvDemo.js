const csv = require('csv-parser')
const fs = require('fs')
fs.createReadStream('cricket.csv')
fs.appendFile(csv())
fs.on('data',(row)=>{
    console.log("csv row :",row);    
})
fs.end('end',()=>{
    console.log("read complete")
})