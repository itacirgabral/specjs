const assert = require('assert');
const capitalDe = require('./procedimento');

describe("# ESTADOS E SUAS RESPECTIVAS CAPITAIS", () => {
  describe('## Estados do nordeste', () => {
    it("Maranhão", () => {
      const capital = capitalDe("Maranhão")
      assert(capital === "São Luís", "A capital não é esta")
    })
    it("Piauí", () => {
      const capital = capitalDe("Piauí")
      assert(capital === "Teresina", "A capital não é esta")
    })
    it("Ceará", () => {
      const capital = capitalDe("Ceará")
      assert(capital === "Fortaleza", "A capital não é esta")
    })
    it("Rio Grande do Norte", () => {
      const capital = capitalDe("Rio Grande do Norte")
      assert(capital === "Natal", "A capital não é esta")
    })
    it("Paraíba", () => {
      const capital = capitalDe("Paraíba")
      assert(capital === "João Pessoa", "A capital não é esta")
    })
    it("Pernambuco", () => {
      const capital = capitalDe("Pernambuco")
      assert(capital === "Recife", "A capital não é esta")
    })
    it("Alagoas", () => {
      const capital = capitalDe("Alagoas")
      assert(capital === "Maceió", "A capital não é esta")
    })
    it("Sergipe", () => {
      const capital = capitalDe("Sergipe")
      assert(capital === "Aracaju", "A capital não é esta")
    })
    it("Bahia", () => {
      const capital = capitalDe("Bahia")
      assert(capital === "Salvador", "A capital não é esta")
    })
  })
});
