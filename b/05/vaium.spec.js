const { describe, it } = require("mocha");
const assert = require("assert");
const vaium = require("./vaium");

describe("# VAIUM", () => {
  it("## nem vai", () => {
    const arr = [4, 4, 4, 9, 4];
    const gabarito = [4, 4, 4, 9, 4];
    const resultado = vaium(arr);
    assert.deepEqual(gabarito, resultado);
  });
  it("## vai um", () => {
    const arr = [4, 4, 4, 10, 4];
    const gabarito = [4, 4, 4, 0, 5];
    const resultado = vaium(arr);
    assert.deepEqual(gabarito, resultado);
  });
  it("## vai um domino", () => {
    const arr = [10, 9, 4, 4, 4];
    const gabarito = [0, 0, 5, 2, 2];
    const resultado = vaium(arr);
    assert.deepEqual(gabarito, resultado);
  });
  it("## somas na horizontal", () => {
    const arr = [[1, 2], [3, 4]];
    const gabarito = [3, 7];
    const resultado = vaium(arr);
    assert.deepEqual(gabarito, resultado);
  });
  it("## vai um somando", () => {
    const arr = [[2, 2], [2, 2], [2, 2], [2, 8], [2, 2]];
    const gabarito = [4, 4, 4, 0, 5];
    const resultado = vaium(arr);
    assert.deepEqual(gabarito, resultado);
  });
  it("## vai um domino somando", () => {
    const arr = [[2, 8], [2, 7], [2, 2], [2, 2], [2, 2]];
    const gabarito = [0, 0, 5, 2, 2];
    const resultado = vaium(arr);
    assert.deepEqual(gabarito, resultado);
  });
  it("## somando em varios na horizontal", () => {
    const arr = [[2], [2, 2], [2, 2, 2], [2, 2, 2, 2]];
    const gabarito = [2, 4, 6, 8];
    const resultado = vaium(arr);
    assert.deepEqual(gabarito, resultado);
  });
  it("## vai um somando em varios na horizontal", () => {
    const arr = [[2], [2, 2, 6], [2, 2, 2], [2, 2, 2, 2]];
    const gabarito = [2, 0, 7, 8];
    const resultado = vaium(arr);
    assert.deepEqual(gabarito, resultado);
  });
  it("## vai um domino somando em varios na horizontal", () => {
    const arr = [[582], [2, 2], [2, 2, 2], [2, 2, 2, 2]];
    const gabarito = [2, 2, 2, 9];
    const resultado = vaium(arr);
    assert.deepEqual(gabarito, resultado);
  });
});
