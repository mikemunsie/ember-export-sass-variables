/* eslint-env node */
const fs = require('fs');

// Based off the idea from: https://github.com/Punk-UnDeaD/node-sass-export
const getOutput = (val) => {
  let output;
  switch (val.constructor.name) {
    case 'SassList':
      output = [];
      for (let i = 0; i < val.getLength(); i++) {
        output.push(getOutput(val.getValue(i)));
      }
      return output;
    case 'SassMap':
      output = {};
      for (let i = 0; i < val.getLength(); i++) {
        output[val.getKey(i).getValue()] = getOutput(val.getValue(i));
      }
      return output;
    case 'SassColor':
      if (val.getA() === 1) {
        output = `rgb(${parseInt(val.getR())}, ${parseInt(val.getG())}, ${parseInt(val.getB())})`;
      } else {
        output = `rgb(${parseInt(val.getR())}, ${parseInt(val.getG())}, ${parseInt(val.getB())}, ${parseInt(val.getA())})`;
      }
      return output;
    case 'SassNumber':
      output = val.getValue();
      if (val.getUnit()) {
        output += val.getUnit();
      }
      return output;
    default:
      return val.getValue();
  }
};

module.exports = (path) => ({
  'export($fileName, $value:())': (fileName, value) => {
    const output = getOutput(value);
    fs.writeFileSync(`${path}/${fileName.getValue()}.js`, `/* eslint-disable */
// Auto Generated file from exportSass.
exports.default = ${JSON.stringify(output, null, ' ')};`);
    return value;
  }
});
