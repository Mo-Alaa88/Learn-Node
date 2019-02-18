const fs = require('fs'),
// read file
// fs.readFileSync(path[, options])
    readMe = fs.readFileSync('./read Some words.txt','utf8'),
// we can read all dirctors by ./
// fs.readdirSync(path[, options])
    files = fs.readdirSync('./');
// 
files.forEach((element)=>{
    console.log(element);
    
});
// code 1
console.log(readMe);
// code 2
console.log('Finished !!');

// write File
// fs.writeFileSync(file, data[, options])
fs.writeFileSync('New File.txt',readMe);


// more Detailes for util File System
// https://nodejs.org/docs/latest-v8.x/api/fs.html