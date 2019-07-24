const express = require('express'),
     http = require('http');

const hostname = 'localhost';
const port = 4000;
const app = express();

const morgan = require('morgan');

const bodyParser = require('body-parser');


app.use(bodyParser.json());

const dishRouter = require('./dishRouter');
app.use('/dishes', dishRouter);

const promoRouter = require('./promoRouter');
app.use('/promotions', promoRouter);

const promoRouter = require('./leaderRouter');
app.use('/leaders', leaderRouter);


app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200; 
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});