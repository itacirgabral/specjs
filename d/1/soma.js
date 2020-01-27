const soma = function () {
  console.log('        é que me escapuliu...');
  throw new Error('soma com infinito');
  console.log('isto nunca vai ser logado');
  return 'calma, não criemos pânico'
}

module.exports = soma