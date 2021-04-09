const path = require('path');

console.log(path.basename(__filename));

// directory name only 
console.log(path.dirname(__filename));

// get the  extention
console.log(path.extname(__filename));

// creat an object 
console.log(path.parse(__filename).base);

/// join ../test/hello.html

console.log(path.join(__dirname,'Test','hello.html'))