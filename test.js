const { average, standardDeviation } = require('./statistics');
const { generateChart } = require('./graphics');

const data = [10, 20, 30, 40, 50];

console.log('Average:', average(data));
console.log('Standard Deviation:', standardDeviation(data));

generateChart('Chart.png', ['A', 'B', 'C', 'D', 'E'], data).then(() => {
  console.log('Chart Generated.');
});