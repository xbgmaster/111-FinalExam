const http = require('http');

function createServer() {
    return http.createServer((req, res) => {
        if (req.url === '/health') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: 'ok' }));
        } else {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('SnapCart is running.');
        }
    });
}

if (require.main === module) {
    createServer().listen(3000, () => {
        console.log('Server started on port 3000');
    });
}

module.exports = { createServer };
