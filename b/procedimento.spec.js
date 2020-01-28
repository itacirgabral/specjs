const assert = require('assert');
const capitalDe = require('./procedimento');

describe("# ESTADOS E SUAS RESPECTIVAS CAPITAIS", function () {
  describe('## Estados do nordeste', function () {
    it("Maranhão", function () {
      const capital = capitalDe("Maranhão")
      assert(capital === "São Luís", "A capital não é esta")
    })
    it("Piauí", function () {
      const capital = capitalDe("Piauí")
      assert(capital === "Teresina", "A capital não é esta")
    })
    it("Ceará", function () {
      const capital = capitalDe("Ceará")
      assert(capital === "Fortaleza", "A capital não é esta")
    })
    it("Rio Grande do Norte", function () {
      const capital = capitalDe("Rio Grande do Norte")
      assert(capital === "Natal", "A capital não é esta")
    })
    it("Paraíba", function () {
      const capital = capitalDe("Paraíba")
      assert(capital === "João Pessoa", "A capital não é esta")
    })
    it("Pernambuco", function () {
      const capital = capitalDe("Pernambuco")
      assert(capital === "Recife", "A capital não é esta")
    })
    it("Alagoas", function () {
      const capital = capitalDe("Alagoas")
      assert(capital === "Maceió", "A capital não é esta")
    })
    it("Sergipe", function () {
      const capital = capitalDe("Sergipe")
      assert(capital === "Aracaju", "A capital não é esta")
    })
    it("Bahia", function () {
      const capital = capitalDe("Bahia")
      assert(capital === "Salvador", "A capital não é esta")
    })
  })
});
