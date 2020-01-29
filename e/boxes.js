const Catch = value => ({
  then: f => Catch(value),
  unbox: () => value
})


const Box =  value => ({
  then: f => {
    try {
      const fvalue = f(value)
      return Box(fvalue)
    } catch (err) {
      return Catch(err.message)
    }
  },
  unbox: () => value
})

const LazyBox = Box

module.exports = { Box, LazyBox }