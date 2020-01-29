function roleta () {
  const lgbtqia = ['a', 1, true, () => {}, Symbol('@'), {}]
  return lgbtqia[Math.trunc(Math.random() * (lgbtqia.length + 1))]
}

var i = roleta()