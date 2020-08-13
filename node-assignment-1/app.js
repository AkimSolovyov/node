const http = require('http');
const cowsay = require('cowsay');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  res.statusCode = 200;

  if(url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<h1>Enter Your Name</h1>');
    res.write('<form action="/create-user" method="POST"><input type="text" name="username"/><button type="submit">Submit</button></form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  if(url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body>');
    res.write('<ul><li>John Doe</li><li>Mike Myers</li><li>Sorin Markov</li></ul> ');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

   if(url === '/create-user' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody.split('=')[1])
    });
    res.statusCode = '302';
    res.setHeader('Location', '/');
    return res.end();
  }
  // default, all other routes
  res.write('<html>');
  res.write('<body>');
  res.write('<h1>Page not Found!</h1>');
  res.write('</body>');
  res.write('</html>');
});

server.listen(port, hostname, () => {
  console.log(cowsay.say({
    text : `Server running at http://${hostname}:${port}/`,
  }));
});