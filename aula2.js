var http = require('http')
var arquivo = require('fs') // file system

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-type': 'text/html' })
  // __dirname retorna o diretório do projeto
  arquivo.readFile(`${__dirname}/arquivos/index.html`, function (err, html) {
    if (err) {
      res.write('Arquivo index.html não encontrado')
    } else {
      res.write(html)
    }
    res.end()
  })
})

server.listen(3000, function () {
  console.log('Servidor rodando na porta 3000')
})

// Testando uma mudança
