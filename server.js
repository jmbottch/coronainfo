const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');

const app = express();

const appname = "minorzt2"

app.use(express.static(path.join(__dirname, 'dist', appname)));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'dist', appname, 'index.html'));
})

const port = process.env.PORT || '4200';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Angular app \'${appname}\' running on port ${port}`));