import { curry } from 'ramda';
import { mapTransform } from './util';

export const mirror = curry(function _mirror(line, point) {
  const lineStart = line[0];
  const lineEnd = line[1];
  const dx = lineEnd.x - lineStart.x;
  const dy = lineEnd.y - lineStart.y;
  const a = (dx * dx - dy * dy) / (dx * dx + dy * dy);
  const b = 2 * dx * dy / (dx * dx + dy * dy);

  return {
    x: a * (point.x - lineStart.x) + b * (point.y - lineStart.y) + lineStart.x,
    y: b * (point.x - lineStart.x) - a * (point.y - lineStart.y) + lineStart.y
  };
});

export const mirrorHorizontal = (width, height) => mapTransform(mirror([{x: 0, y: height}, {x: 2 * width, y: height}]));

export const mirrorVertical = (width, height) => mapTransform(mirror([{x: width, y: 0}, {x: width, y: 2 * height}]));

export const mirrorDiagonalRL = (width, height) => mapTransform(mirror([{x: 0, y: 0}, {x: width, y: height}]));

export const mirrorDiagonalLR = (width, height) => mapTransform(mirror([{x: width, y: 0}, {x: 0, y: height}]));

export const mirrorHex = (width) => mapTransform(mirror([
  {x: Math.sqrt(3) / 2 * width, y: width},
  {x: 0, y: width * 0.5}
]));

export const mirrorTriangle = (width, height) => mapTransform(mirror([
  {x: width / 2, y: 0},
  {x: width, y: height}
]));
