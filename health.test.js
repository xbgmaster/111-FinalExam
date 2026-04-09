const assert = require('assert');
const http   = require('http');
const { createServer } = require('./server');
 
const server = createServer();
 
server.listen(0, async () => {
  const port = server.address().port;
  const url  = `http://localhost:${port}/health`;
 
  const res  = await fetch(url);
  const body = await res.json();
 
  assert.strictEqual(res.status, 200);
  assert.strictEqual(body.status, 'ok');
 
  console.log('All tests passed!');
  server.close();
});
