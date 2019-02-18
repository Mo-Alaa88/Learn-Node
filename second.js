const newCode = ()=> console.log(`\n We Will Start New CODE!!\n`);
// If you need work with files on any OS you can use path module 
// NOTE you dont need add './' before path
const path = require('path');
const result = path.parse(__filename);
console.log(result);
///////////////
newCode();
///////////////
// If you need to access to any data from OS (any OS)
const os = require('os');
//'totalmem & freemem' method returns the amount of free system memory in bytes as an integer.
const getTotalMemory = os.totalmem(); 
const getFreeSpaceMemory = os.freemem();
console.log(`Total Memory: ${getTotalMemory}\nFree SpaceMemory: ${getFreeSpaceMemory}`);
// more Detailes for path & os \/
// https://nodejs.org/docs/latest-v8.x/api/path.html
// https://nodejs.org/docs/latest-v8.x/api/os.html