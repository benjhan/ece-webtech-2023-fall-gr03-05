// Import a module
const express = require('express')
const app = express();

const home = require('./routes')
const hello = require('./routes/hello')
const about = require('./routes/about')

app.use('/', home);
app.use('/hello', hello);
app.use('/about', about);

app.set('port', 8080);

app.listen(
    app.get('port'), 
    () => console.log('Server listening on' )
)