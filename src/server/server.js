var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api', (req, res) => {
    res.send('bob');
});

app.post('/api', (req, res) => {
    console.log("req", req.body);
    if (req.body && req.body.query && (typeof req.body.query === 'object')) {
        console.log("test", req.body.query);
    }
    res.send('received');
});

var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});
