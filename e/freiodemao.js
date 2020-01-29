function roleta () {
  if (Math.random() > 0.5) {
    throw new Error("BUM!")
  } else {
    return true
  }
}

var i = 0
while (roleta()) {
  console.log(i++)
}