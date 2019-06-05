const zip = (...args) =>
  Array(args[0].length)
    .fill()
    .map((_, i) =>
      Array(args.length)
        .fill()
        .map((_, j) => args[j][i])
    );

module.exports = zip;
