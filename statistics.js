function average(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
  return arr.reduce((a, b) => a + b, 0) / arr.length;
  }
}

function standardDeviation(arr) {
  const media = average(arr);
  const sumaCuadrados = arr.reduce((acc, val) => acc + (val - media) ** 2, 0);
  return Math.sqrt(sumaCuadrados / arr.length);
}

module.exports = { average, standardDeviation };