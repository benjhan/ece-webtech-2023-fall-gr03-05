// Import a module
const express = require('express')
const app = express();

const home = require('./routes')
const hello = require('./routes/hello')
const about = require('./routes/about')
const article = require('./routes/articles')

app.use(express.json());
app.use('/', home);
app.use('/hello', hello);
app.use('/about', about);
app.use('/article', article);

app.set('port', 8080);

app.listen(
    app.get('port'), 
    () => console.log('Server listening on' )
)