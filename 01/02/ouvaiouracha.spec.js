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
  it("infinito -> erro", () => {
    const v = Infinity
    const gabarito = new RangeError("soma com infinito")
    assert.throws(() => ouvaiouracha(v), gabarito)
  })
  it("null -> erro", () => {
    const v = null
    const gabarito = new RangeError("soma com null")
    assert.throws(() => ouvaiouracha(v), gabarito)
  })
  it("undefined -> erro", () => {
    const gabarito = new RangeError("soma com undefined")
    assert.throws(() => ouvaiouracha(v), gabarito)
  })
  it("NaN -> erro", () => {
    const v = NaN
    const gabarito = new RangeError("soma com NaN")
    assert.throws(() => ouvaiouracha(v), gabarito)
  })
})