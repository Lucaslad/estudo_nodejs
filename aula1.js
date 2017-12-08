var http = require('http') // Importando biblioteca http

// req = request
// res = response
var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-type': 'text/html' })
  res.write('Olá mundo<br>')
  res.write('Aula de nodejs')
  res.end()
})

server.listen(3000, function () {
  console.log('Servidor rodando na porta 3000')
})
