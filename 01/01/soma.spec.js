const assert = require("assert")
const soma = require("./soma")

describe("# SOMA", () => {
  describe("## caminho feliz", () => {
    it("efetua a soma de dois inteiros positivos", () => {
      const v1 = 3
      const v2  = 4
      const gabarito = 7
      const resultado = soma(v1, v2)
      assert.equal(gabarito, resultado, `a soma entre ${v1} e ${v2} deve ser ${gabarito}, mas foi ${resultado}`)
    })
  })
  describe("## caminho dificil", () => {
    it("efetua a soma de numeros em texto", () => {
      const v1 = "3"
      const v2  = "4"
      const gabarito = 7
      const resultado = soma(v1, v2)
      assert.equal(gabarito, resultado, `a soma entre ${v1} e ${v2} deve ser ${gabarito}, mas foi ${resultado}`)
    })
  })
  describe("## caminho defensivo", () => {
    it("efetua a soma infinito", () => {
      const v1 = 3
      const v2  = Infinity
      const gabarito = new Error("soma com infinito")
      assert.throws(() => soma(v1, v2), gabarito, "a funcao deve explodir")
    })
  })
})