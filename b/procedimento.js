const ns = "Não sei"

module.exports = function (estado) {
  if (estado === "Maranhão") {
    return ns
  } else if (estado === "Piauí") {
    return ns
  } else if (estado === "Ceará") {
    return ns
  } else if (estado === "Rio Grande do Norte") {
    return ns
  } else if (estado === "Paraíba") {
    return ns
  } else if (estado === "Pernambuco") {
    return ns
  } else if (estado === "Alagoas") {
    return ns
  } else if (estado === "Sergipe") {
    return ns
  } else if (estado === "Bahia") {
    return ns
  } else {
    throw new Error("estado desconhecido")
  }
}