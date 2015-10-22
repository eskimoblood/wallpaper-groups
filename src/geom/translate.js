import { curry } from 'ramda';

export const translate1W2H = curry((width, height, columns, i) =>({
  x: width * (i % columns),
  y: 2 * height * Math.floor(i / columns)
}));

export const translate2W1H = curry((width, height, columns, i) =>({
  x: 2 * width * (i % columns),
  y: height * Math.floor(i / columns)
}));

export const translate2W2H = curry((width, height, columns, i) =>({
  x: 2 * width * (i % columns),
  y: 2 * height * Math.floor(i / columns)
}));

export const translateShifted = curry((width, height, columns, i)=> {
  var offsetX = 0;
  if (Math.floor(i / columns) % 2) {
    offsetX = width / 2;
  }
  return {
    x: offsetX + width * (i % columns),
    y: height * Math.floor(i / columns)
  };
});

export const translateHex = curry((width, height, columns, i)=> {
  var offsetX = 0;
  if (Math.floor(i / columns) % 2) {
    offsetX = width / 2;
  }
  return {
    x: offsetX + width * (i % columns),
    y: 0.75 * height * Math.floor(i / columns)
  };
});
