const http = require('http');
http.createServer ((request,response) => {
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello World.');
    
})
.listen(8080);
console.log('Application running on port 8080');