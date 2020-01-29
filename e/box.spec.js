const assert = require('assert')
const { Box, LazyBox} = require('./boxes')

describe('# ESCOPO', () => {
  it('## BOX - Caso direto', () => {
    var doze = Box(2).then(x => x + 2).then(x => x * 3).unbox()
    assert.equal(doze, 12, 'O valor calculado na caixa deveria ser 12')
  })

  it('## BOX - Caso com erro', () => {
    var oops = Box(2).then(() => {
      throw new Error('oops')
    }).then(x => x + 2).then(x => x * 3).unbox()
    assert.equal(oops, 'oops', 'O valor calculado na caixa deveria ser oops')
  })

  it('## LAZYBOX', () => {
    let x0 = 0
    const b = LazyBox(() => x0 + 2).then(x => x * 3)

    x0 = 2
    const doze = b.unbox()
    assert.equal(doze, 12, 'O valor calculado na caixa deveria ser 12')
  })
})