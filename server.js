const http = require('http');
const hostname = '127.0.0.1';
const port = 3005;

const server = http.creatServer((req,res)) => {
	res.statusCode = 200;
	res.setHeader('Content-Type','text/plain');
	res.end('Hello world\n');
});

server.listen(port,hostname,()=>{
	console.log('server running at http://${hostname}:${port}/');
})