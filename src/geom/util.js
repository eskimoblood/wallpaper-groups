import { curry, append, map, last } from 'ramda';

const mapOverPoints = curry((pr, line) => map(pr, line));

// Take the last line from the collection, apply the transformation and append the result to the line collection
export const mapTransform = curry((pr, r) => append(map(mapOverPoints(pr), last(r)), r));

export const split = (start, end, percentage) => ({
  x: start.x + (end.x - start.x) * percentage,
  y: start.y + (end.y - start.y) * percentage
});

export const rectCoords = (w, h) =>([
  {x: 0, y: 0},
  {x: w, y: 0},
  {x: w, y: h},
  {x: 0, y: h}
]);

export const triangleCoords = (w, h) =>([
  {x: w / 2, y: 0},
  {x: w, y: h},
  {x: 0, y: h}
]);

export const rightTriangleCoords = (w, h) =>([
  {x: w, y: 0},
  {x: w, y: h},
  {x: 0, y: h}
]);
