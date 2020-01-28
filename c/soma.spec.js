const soma = require('./soma')
const assert = require('assert')
describe("# SOMA", function () {
  it("## 3 + 4",function () {
    const sete = soma(3, 4)
    assert(sete === 7)
  })
})