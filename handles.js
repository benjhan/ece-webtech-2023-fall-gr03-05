// ./handles.js
// Necessary imports
// Import Node url module
const url = require('url')
const qs = require('querystring')

module.exports = {
    
    serverHandle: function (req, res) {
        const route = url.parse(req.url)
        const path = route.pathname 
        const params = qs.parse(route.query)
      

        res.writeHead(200, {'Content-Type': 'text/plain'})
        if (path === '/hello' && params['name'] === 'Benjamin')
            res.write('Hello Benjamin Han  , student at ECE Paris')
        else if (path === '/hello' && 'name' in params) {
          res.write('Hello ' + params['name'])
        } else if(path === '/about')
        {
            try{
                const content = require('./content/about.json')
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(content, null, 2));
            }catch{
            res.write('Error: File About can not be found')
            }
        }
        else {
          res.write('Hello anonymous')
        }
        
        res.end()
      }
    }