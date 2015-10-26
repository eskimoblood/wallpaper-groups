import { curry } from 'ramda';
import { mapTransform } from './util';

export default (mirrorFn, offsetX, offsetY) => mapTransform(curry((point) => {
  const {x, y} = mirrorFn(point);
  return {
    x: x + offsetX,
    y: y + offsetY
  };
}));
