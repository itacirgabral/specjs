const { describe, it } = require("mocha");
const assert = require("assert");
const zip = require("./zip");

describe("# ZIP", () => {
  it("## Zipar 2 vetores em 1", () => {
    const arr1 = [1, 2, 3];
    const arr2 = ["a", "b", "c"];
    const gabarito = [[1, "a"], [2, "b"], [3, "c"]];
    const resultado = zip(arr1, arr2);
    debugger;
    assert.deepEqual(gabarito, resultado);
  });
});
