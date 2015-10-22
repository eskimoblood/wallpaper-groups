import { curry } from 'ramda';
import { mapTransform } from './util';

export default (mirrorFn, offsetX, offsetY) => mapTransform(curry((point) => {
  const mirroredPoint = mirrorFn(point);
  return {
    x: mirroredPoint.x + offsetX,
    y: mirroredPoint.y + offsetY
  };
}));
