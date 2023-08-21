const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.end("console.log('hello');");
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
