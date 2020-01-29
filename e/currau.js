function currau () {
  var c = 0
  var soma = function soma (a, b) {
    return a + b + c
  }

  return soma
}

var soma = currau()

var c = 10

console.log(soma(2, 3))