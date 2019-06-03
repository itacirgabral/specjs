const assert = require("assert")
const ouvaiouracha = require("./ouvaiouracha")

describe("# Ou vai Ou Racha", () => {
  it("numero -> numero", () => {
    const v = 3
    const gabarito = 3
    const resultado = ouvaiouracha(v)
    assert.equal(gabarito, resultado)
  })
  it("tring -> numero", () => {
    const v = "3"
    const gabarito = 3
    const resultado = ouvaiouracha(v)
    assert.equal(gabarito, resultado)
  })
  it("tring -> numero", () => {
    const v = "-3"
    const gabarito = -3
    const resultado = ouvaiouracha(v)
    assert.equal(gabarito, resultado)
  })
  it("tring -> numero", () => {
    const v = "3.2"
    const gabarito = 3.2
    const resultado = ouvaiouracha(v)
    assert.equal(gabarito, resultado)
  })
  it("tring -> numero", () => {
    const v = "-3.2"
    const gabarito = -3.2
    const resultado = ouvaiouracha(v)
    assert.equal(gabarito, resultado)
  })
  it("tring -> numero", () => {
    const v = "cinco"
    const gabarito = new Error("soma com string")
    assert.throws(() => ouvaiouracha(v), gabarito)
  })
  it("infinito -> erro", () => {
    const v = Infinity
    const gabarito = new Error("soma com infinito")
    assert.throws(() => ouvaiouracha(v), gabarito)
  })
  it("null -> erro", () => {
    const v = null
    const gabarito = new Error("soma com null")
    assert.throws(() => ouvaiouracha(v), gabarito)
  })
  it("undefined -> erro", () => {
    const gabarito = new Error("soma com undefined")
    assert.throws(() => ouvaiouracha(v), gabarito)
  })
  it("NaN -> erro", () => {
    const v = NaN
    const gabarito = new Error("soma com NaN")
    assert.throws(() => ouvaiouracha(v), gabarito)
  })
})