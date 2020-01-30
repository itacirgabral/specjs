const assert = require('assert')
const soma = require('./soma')

describe("# DESAFIO", () => {
  it(`## Soma de "2" com "3"`, () => {
    const cinco = soma("2", "3")
    
    assert.equal(cinco, "5", `deve ser "5"`)
  })
})