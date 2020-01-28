const setup = require('./setup');

describe("# DESCRIÇÃO DO TESTE", function () {
  it('descricao do que deve acontecer', function () {
    // teste a ser realizado
    if (setup === 'setup') {
      // tudo certo
    } else {
      throw new Error(`Especificação do que está errado`)
    }
  })
});
