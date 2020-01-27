const express = require('express')
const soma = require('./soma')

const app = express()
const port = 3000

app.get('/', (req, res) => res.send(`<!doctype html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <title>Calculadora</title>
</head>
<body>
  <h1>Soma</h1>
  <form action="/soma">
    <input id="input_a" type="text" name="a">
    +
    <input id="input_b" type="text" name="b">
    =
    <button>calcular</button>
  </form>
</body>
</html>`))

app.get('/soma', express.urlencoded({ extended: true }), (req, res) => {
  const a = req.query.a
  const b = req.query.b
  const AmaisB = soma(a, b)

  res.send(`<!doctype html>
<html lang="pt-br">
<head>
  <meta charset="utf-8">
  <title>Soma</title>
</head>
<body>
  <h1>${ a } + ${ b } = ${ AmaisB }</h1>
</body>
</html>`)

})

app.listen(3000)