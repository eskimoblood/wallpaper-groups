import { curry } from 'ramda';

const w = (width, i, columns) => width * (i % columns);
const h = (height, i, columns) => height * Math.floor(i / columns);

const translate = curry((fW, fH, width, height, columns, i)=>({
  x: fW * w(width, i, columns),
  y: fH * h(height, i, columns)
}));

const _translateShifted = curry(curry((fH, width, height, columns, i)=> {
  var offsetX = 0;
  if (Math.floor(i / columns) % 2) {
    offsetX = width / 2;
  }
  return {
    x: offsetX + w(width, i, columns),
    y: h(height, i, columns)
  };
}));

export const translate1W1H = translate(1, 1);

export const translate1W2H = translate(1, 2);

export const translate2W1H = translate(2, 1);

export const translate2W2H = translate(2, 2);

export const translateShifted = _translateShifted(1);

export const translateHex = translateShifted(0.75);
