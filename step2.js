// How To crate server With node js

const http = require('http');

const hostname = '127.0.0.1';
const port = 4020;

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.getHeader('Content-Type','text/html');
    res.write("<p style='color:red'>Hi World</p>");
    res.end();
})

server.listen(port,hostname,()=>{
    console.log(`I could http://${hostname}/${port}/`);
})

// thats a real love ;) 
