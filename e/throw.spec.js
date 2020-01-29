var assert = require('assert')
var tictac = require('./throw')

describe("# TESTANDO ALGO QUE EXPLODE", function () {
  it('## OPS', function () {
    var erro = tictac()
    assert.throws(erro, Error, "ERRO!")
  })
  it('## THROW!', function () {
    assert.throws(tictac, Error, "ERRO!")
  })
})