const assert = require("assert")
const soma = require("./soma")

describe("# SOMA", () => {
  describe("## caminho feliz", () => {
    it("efetua a soma de dois inteiros positivos", () => {
      const v1 = 3
      const v2  = 4
      const gabarito = 7
      const resultado = soma(v1, v2)
      assert.equal(gabarito, resultado);
    })
  })
  describe("## caminho dificil", () => {
    it("efetua a soma de numeros em texto", () => {
      const v1 = "3"
      const v2  = "4"
      const gabarito = 7
      const resultado = soma(v1, v2)
      assert.equal(gabarito, resultado);
    });
  })
  describe("## caminho defensivo", () => {
    it("efetua a soma de numeros em texto", () => {
      const v1 = 3
      const v2  = Infinity
      const gabarito = RangeError("soma com infinito")
      const resultado = soma(v1, v2)
      assert.equal(gabarito, resultado);
    });
  })
});