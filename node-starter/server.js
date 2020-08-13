const http = require('http');

const server = http.createServer((request, response)=> {
  console.log('method:', request.method);
  console.log('url:', request.url);
  console.log('headers:', request.headers);
  // response.setHeader('Content-Type', 'text/html');
  // response.end('<h1>Oh, Hello There!</h1>');
  const user = {
    name: 'Ulf',
    hobby: 'lots of'
  };

  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify(user));
  console.log('The Server is alive!');
});

server.listen(4000);