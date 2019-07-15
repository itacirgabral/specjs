const setup = require('./setup');

describe("# DESCRIÇÃO DO TESTE", () => {
  it('descricao do que deve acontecer', () => {
    // teste a ser realizado
    if (setup === 'setup') {
      // tudo certo
    } else {
      throw new Error(`Especificação do que está errado`)
    }
  })
});
