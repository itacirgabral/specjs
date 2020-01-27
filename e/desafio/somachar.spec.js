const { describe, it } = require("mocha");
const assert = require("assert");
const somachar = require("./somachar");

describe("# SOMA DE CARACTERES", () => {
  it("## inteiro pequeno simetrico sem sobra", () => {
    const v1 = "3";
    const v2 = "4";
    const r0 = "7";
    const resultado = soma(v1, v2);
    assert.equal(
      r0,
      resultado,
      `a soma entre ${v1} e ${v2} deve ser ${r0}, mas foi ${resultado}`
    );
  });
  it("## inteiro grande simetrico sem sobra", () => {
    const v1 =
      "3333333333333333333333333333333333333333333333333333333333333333";
    const v2 =
      "4444444444444444444444444444444444444444444444444444444444444444";
    const r0 =
      "7777777777777777777777777777777777777777777777777777777777777777";
    const resultado = soma(v1, v2);
    assert.equal(
      r0,
      resultado,
      `a soma entre ${v1} e ${v2} deve ser ${r0}, mas foi ${resultado}`
    );
  });
  it("## inteiro grande assimetrico sem sobra", () => {
    const v1 =
      "3333333333333333333333333333333333333333333333333333333333333333";
    const v2 = "44444444444444444444444444444444";
    const r0 =
      "3333333333333333333333333333333377777777777777777777777777777777";
    const resultado = soma(v1, v2);
    assert.equal(
      r0,
      resultado,
      `a soma entre ${v1} e ${v2} deve ser ${r0}, mas foi ${resultado}`
    );
  });
  it("## inteiro pequeno simetrico com sobra", () => {
    const v1 = "8";
    const v2 = "9";
    const r0 = "17";
    const resultado = soma(v1, v2);
    assert.equal(
      r0,
      resultado,
      `a soma entre ${v1} e ${v2} deve ser ${r0}, mas foi ${resultado}`
    );
  });
  it("## inteiro grande simetrico com sobra", () => {
    const v1 =
      "5012830364528450458235458809894723549569676830975462048609836406";
    const v2 =
      "6923450978612345678341094589123450976543890091236479450123123457";
    const r0 = "17";
    const resultado = soma(v1, v2);
    assert.equal(
      r0,
      resultado,
      `a soma entre ${v1} e ${v2} deve ser ${r0}, mas foi ${resultado}`
    );
  });
  it("## inteiro grande assimetrico com sobra", () => {
    const v1 =
      "5012830364528450458235458809894723549569676830975462048609836406";
    const v2 = "50976543890091236479450123123457";
    const r0 = "17";
    const resultado = soma(v1, v2);
    assert.equal(
      r0,
      resultado,
      `a soma entre ${v1} e ${v2} deve ser ${r0}, mas foi ${resultado}`
    );
  });
});
