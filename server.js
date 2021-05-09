//importeer requirements
const express = require('express');
const path = require('path');
const http = require('http');
const cors = require('cors');

//isntantieer app
const app = express();

//selecteer appname
const appname = "minorzt2"

//selecteer path
app.use(express.static(path.join(__dirname, 'dist', appname)));
//helper for cross origin request sharing (nu niet heel nuttig, maar wel handig in development met een back-end)
app.use(cors())

//selecteer path naar index.html
app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'dist', appname, 'index.html'));
})

//definieer de port: gekozen door host, of localhost:4200
const port = process.env.PORT || '4200';
app.set('port', port);

//creeer een server voor de app
const server = http.createServer(app);

// laat de server luisteren naar requests
server.listen(port, () => console.log(`Angular app \'${appname}\' running on port ${port}`));