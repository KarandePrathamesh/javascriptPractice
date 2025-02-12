// npm install csv-parser
// npm install fast-csv

const csv = require('csv-parser')
const fs = require('fs')
fs.createReadStream('cricket.csv')
.pipe(csv())        // begins to parse data into stream
.on('data',(row)=>{
    // console.log("csv row :",row);  
    console.log(`${row['player_name']}`);  

})
.on('end',()=>{
    console.log("read complete")
})


// Write to CSV files
const csvWriter = require('fast-csv')
const data = [
    {player_name:'Onkar',player_surname:'Salunkhe'},
    {player_name:'Rohan',player_surname:'Sapkal'},
    {player_name:'Sakshi',player_surname:'Pawar'},
    {player_name:'Prathamesh',player_surname:'Karande'},
    {player_name:'Prashasti',player_surname:'Dhanorkar'},
    {player_name:'Pranita',player_surname:'Birajdar'},
    {player_name:'Gayatri',player_surname:'Astikar'},
    {player_name:'Namarata',player_surname:'Akolkar'} ]

    csvWriter.writeToPath('newData.csv',data,{headers:true})
    .on('finish',()=>{
        console.log("Write Complete");
        
    })

