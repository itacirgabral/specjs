const assert = require("assert")
const mk_soma = require("./soma_vetores")

describe("# SOMA", () => {
  describe("## junta tudo", () => {
    it("Recebe 2 vetores e retorna a concatecação de ambos", () => {
      const soma = mk_soma('concat')
      const v1 = [1, 2, 3]
      const v2  = [4, 5]
      const gabarito = [1, 2, 3, 4, 5]
      const resultado = soma(v1, v2)
      assert.deepEqual(gabarito, resultado, `a soma entre ${v1} e ${v2} deve ser ${gabarito}, mas foi ${resultado}`)
    })
  })
  describe("## soma tudo", () => {
    it("Recebe 2 vetores retorna a soma de todos os elementos", () => {
      const soma = mk_soma('all')
      const v1 = [1, 2, 3]
      const v2  = [4, 5]
      const gabarito = 1 + 2 + 3 + 4 + 5
      const resultado = soma(v1, v2)
      assert.equal(gabarito, resultado, `a soma entre ${v1} e ${v2} deve ser ${gabarito}, mas foi ${resultado}`)
    })
  })
  describe("## soma parcelado", () => {
    it("Recebe 2 vetores e retorna o primeiro com todos os elementos somados com todo o segundo vetor", () => {
      const soma = mk_soma('parts')
      const v1 = [1, 2, 3]
      const v2  = [4, 5]
      const gabarito = [1 + (4 + 5), 2 + (4 + 5), 3 + (4 + 5)]
      const resultado = soma(v1, v2)
      assert.deepEqual(gabarito, resultado, `a soma entre ${v1} e ${v2} deve ser ${gabarito}, mas foi ${resultado}`)
    })
  })
})
