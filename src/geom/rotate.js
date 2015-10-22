import { curry } from 'ramda';
import { mapTransform } from './util';

const rotate = curry(function _rotate(theta, center, p) {
  const angleInRadians = theta * (Math.PI / 180);
  const sinTheta = Math.sin(angleInRadians);
  const cosTheta = Math.cos(angleInRadians);
  const oX = p.x - center.x;
  const oY = p.y - center.y;
  return {
    x: cosTheta * oX - sinTheta * oY + center.x,
    y: sinTheta * oX + cosTheta * oY + center.y
  };
});

export const rotate90 = (center) => mapTransform(rotate(90, center));
export const rotate120 = (center) => mapTransform(rotate(120, center));
export const rotate180 = (center) => mapTransform(rotate(180, center));
