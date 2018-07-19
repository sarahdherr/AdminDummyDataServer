var jsonServer = require('json-server')

var server = jsonServer.create()

server.use(jsonServer.defaults())

var router = jsonServer.router('db.json')
server.use(router)

server.listen(4040, function() {
    console.log('Listening at 4040')
})