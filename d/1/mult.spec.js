const assert = require("assert")
const mult = require("./mult")

describe("# MULTIPLICACAO", () => {
  describe("## caminho feliz", () => {
    it("efetua a multiplicacao de dois inteiros positivos", () => {
      const v1 = 3
      const v2  = 4
      const gabarito = 12
      const resultado = mult(v1, v2)
      assert.equal(gabarito, resultado, `a multiplicacao entre ${v1} e ${v2} deve ser ${gabarito}, mas foi ${resultado}`)
    })
    it("efetua a multiplicacao de dois inteiros", () => {
      const v1 = 3
      const v2  = -4
      const gabarito = -12
      const resultado = mult(v1, v2)
      assert.equal(gabarito, resultado, `a multiplicacao entre ${v1} e ${v2} deve ser ${gabarito}, mas foi ${resultado}`)
    })
    it("efetua a multiplicacao de dois inteiros", () => {
      const v1 = -3
      const v2  = 4
      const gabarito = -12
      const resultado = mult(v1, v2)
      assert.equal(gabarito, resultado, `a multiplicacao entre ${v1} e ${v2} deve ser ${gabarito}, mas foi ${resultado}`)
    })
    it("efetua a multiplicacao de dois inteiros negativos", () => {
      const v1 = -3
      const v2  = -4
      const gabarito = 12
      const resultado = mult(v1, v2)
      assert.equal(gabarito, resultado, `a multiplicacao entre ${v1} e ${v2} deve ser ${gabarito}, mas foi ${resultado}`)
    })
    it("compara comutatividade", () => {
      const v1 = -3
      const v2  = 4
      const gabarito = mult(v1, v2)
      const resultado = mult(v2, v1)
      assert(gabarito === resultado, `a multiplicacao entre ${v1} e ${v2} deve ser ${gabarito}, mas foi ${resultado}`)
    })
    it("compara associatividade", () => {
      const v1 = 3
      const v2 = 4
      const v3 = 5
      const gabarito = mult(v1, mult(v2, v3))
      const resultado = mult(mult(v1, v2), v3)
      assert(gabarito === resultado, `a multiplicacao entre ${v1} e ${v2} deve ser ${gabarito}, mas foi ${resultado}`)
    })
  })
  describe("## caminho dificil", () => {
    it("efetua a soma de numeros em texto", () => {
      const v1 = "3"
      const v2  = "4"
      const gabarito = 12
      const resultado = multi(v1, v2)
      assert.equal(gabarito, resultado, `a soma entre ${v1} e ${v2} deve ser ${gabarito}, mas foi ${resultado}`)
    })
  })
})