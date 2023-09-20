// Import a module
const http = require('http')
const handles =require('./handles')

http
.createServer(handles.serverHandle)
.listen(8080, '127.0.0.1', () => {console.log('Serveur HHTP sur port 8080 ok');})
  