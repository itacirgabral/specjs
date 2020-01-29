const { describe, it } = require("mocha");
const assert = require("assert");
const { keys, values, entries, deepEntries } = require("./parts");

describe("# PARTES", () => {
  describe("## rasas", () => {
    describe("### objeto", () => {
      const obj = { k1: "v1", k2: "v2", k3: "v3" };
      it("chaves de um objeto", () => {
        const gabarito = Object.keys(obj);
        const resultado = keys(obj);
        assert.deepStrictEqual(
          gabarito,
          resultado,
          `as chaves devem ser ${gabarito}, mas foi ${resultado}`
        );
      });
      it("valores de um objeto", () => {
        const gabarito = Object.values(obj);
        const resultado = values(obj);
        assert.deepStrictEqual(
          gabarito,
          resultado,
          `os valores devem ser ${gabarito}, mas foi ${resultado}`
        );
      });
      it("entradas de um objeto", () => {
        const gabarito = [["k1", "v1"], ["k2", "v2"], ["k3", "v3"]];
        const resultado = entries(obj);
        assert.deepStrictEqual(
          gabarito,
          resultado,
          `as entradas devem ser ${gabarito}, mas foi ${resultado}`
        );
      });
    });
    describe("### array", () => {
      const arr = ["v1", "v2", "v3"];
      it("chaves de um array", () => {
        const gabarito = ["1", "2", "3", "length"];
        const resultado = keys(arr);
        assert.deepStrictEqual(
          gabarito,
          resultado,
          `as chaves devem ser ${gabarito}, mas foi ${resultado}`
        );
      });
      it("valores de um objeto", () => {
        const gabarito = ["v1", "v2", "v3"];
        const resultado = values(arr);
        assert.deepStrictEqual(
          gabarito,
          resultado,
          `os valores devem ser ${gabarito}, mas foi ${resultado}`
        );
      });
    });
  });
  describe("## dois niveis", () => {
    it("entradas de objeto dentro de objeto", () => {
      const obj = { k1: { k2: "v1" }, k3: ["v2", "v3"] };
      const gabarito = [["k1", { k2: "v1" }], ["k3", ["v2", "v3"]]];
      const resultado = entries(obj);
      assert.deepStrictEqual(
        gabarito,
        resultado,
        `os valores devem ser ${gabarito}, mas foi ${resultado}`
      );
    });
    it("entradas recursivas de objeto dentro de objeto", () => {
      const obj = { k1: { k2: "v1" }, k3: ["v2", "v3"] };
      const gabarito = [["k1",[["k2","v1"]]],["k3",[["0","v2"],["1","v3"]]]];
      const resultado = deepEntries(obj);
      assert.deepStrictEqual(
        gabarito,
        resultado,
        `os valores devem ser ${gabarito}, mas foi ${resultado}`
      );
    });
  });
});
