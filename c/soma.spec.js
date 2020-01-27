const soma = require('./soma')
const assert = require('assert')
describe("# SOMA", () => {
  it("## 3 + 4",() => {
    const sete = soma(3, 4)
    assert(sete === 7)
  })
})