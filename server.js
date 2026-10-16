const http = require('http');

const server = http.createServer((req, res) => {
    if (1 == "1") {
	console.log("Prova");
    }

    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Servidor Node.js funcionant');
});

server.listen(3000, () => {
    console.log('Servidor iniciat en el port 3000');
});
