const url = require('url');

const myUrl = new URL('http://www.ouc.edu.cn/index.html?username=szouc&active=true');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host
console.log(myUrl.host);

// Hostname
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname);

// Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((k, v) => console.log(`${k} => ${v}`));