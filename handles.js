const url = require('url')
const qs = require('querystring')
const path = require('path')
const aboutFile = require ('./content/about')

// Define a string constant concatenating strings
const content = '<!DOCTYPE html>' +
'<html>' +
'    <head>' +
'        <meta charset="utf-8" />' +
'        <title>ECE AST</title>' +
'    </head>' + 
'    <body>' +
'        <p></p>' +
'    </body>' +
'</html>'


module.exports = {
    serverHandle: function (req, res){
        const route = url.parse(req.url)
    const path = route.pathname 
    const params = qs.parse(route.query)

    
    if (path === '/hello' && 'name' in params) {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write(content)

        if ( params['name']== "Theo"){
            res.write("Hello, my name is Theophile and I am an ECE student")
        }
        else{
            res.write('Hello ' + params['name'])
        }
    }
    else if (path === '/about'){
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(JSON.stringify(aboutFile))

    }
    else {
        res.writeHead(404, {'Content-Type': 'text/plain'})
        res.write('Page not found')
    }
    
    res.end()
    }
}