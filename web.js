var express = require('express');
var packageInfo = require('./package.json');

setupExpress();

function setupExpress() {
  const app = express();
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Starting server at ${port}: http://localhost:${port}`);
  });
  app.use(express.static('public'));
  app.use(express.json({ limit: '1mb' }));

  app.post('/api', (request, response) => {
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;
    database.insert(data);
    response.json(data);
  });


  app.get('/api', (request, response) => {
    database.find({}, (err, data) => {
      if (err) {
        response.end();
        return;
      }
      response.json(data);
    });
  });

  app.get('/', function (req, res) {
    res.json({ version: packageInfo.version });
  });
  return app;
}