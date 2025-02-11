const fs = require('fs')
chars = 0
lines = 0
words = 0

vcount = 0
ccount = 0
scount = 0
digits = 0
const vowels = 'aeiouAEIOU'

const stream  = fs.createReadStream('sample.txt','utf-8')

stream.on('data',(mydata)=>{
    
    lines += mydata.split('\n').length;
    chars += mydata.length;
    words += mydata.split(/\s+/).length;

    for(char of mydata) {
        if (char.match(/[a-zA-Z]/)) {
            if (vowels.includes(char)){
                vcount++
            }
        }
    }
});

stream.on('error',(err)=>{
    console.log('error occurred');
})

stream.on('end',()=>{
    console.log('No of Lines : ',lines);
    console.log('No of Chars : ',chars);
    console.log('No of Words : ',words);
})


// console.log('No of Lines : ',lines);
// console.log('No of Chars : ',chars);
// console.log('No of Words : ',words);