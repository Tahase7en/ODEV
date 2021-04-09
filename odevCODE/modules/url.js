const url = require('url');

const myUrl = new URL('http://myWeb.com:8080/hello.html?id=10&status=Active');

// serialized url
console.log(myUrl.href);
console.log(myUrl.toString())

// host (root domain)

console.log(myUrl.host)

// host name
console.log(myUrl.hostname);

// path name
console.log(myUrl.pathname);

// serialize query
console.log(myUrl.search);

// create params object
console.log(myUrl.searchParams); 

// add prams dinamiclly
myUrl.searchParams.append('ahemd','233');

console.log(myUrl.searchParams);

// loop

myUrl.searchParams.forEach((value,name)=>{
 console.log(`${name}: ${value}`);
})

















