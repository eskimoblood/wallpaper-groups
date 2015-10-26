import { curry, map, range, pipe, unnest } from 'ramda';
import patternSettings from './patternSettings';

const calculateTile = (lines, settings) => settings.steps.reduce((r, step) => {
  return step(r);
}, [lines]);

const createTile = pipe(
  calculateTile,
  unnest
);

const add = curry((p1, p2) =>({x: p1.x + p2.x, y: p1.y + p2.y}));

const translateTile = curry((transition, line) => map(add(transition), line));

const translate = curry((tile, transition) => map(translateTile(transition), tile));

export default function({type, width, height, columns, rows, lines}) {
  const settings = patternSettings[type]({width, height, columns});
  const tile = createTile(lines, settings);
  const numberOfTiles = columns * rows;
  return pipe(
    range(0),
    map(settings.translate),
    map(translate(tile))
  )(numberOfTiles);
}
export const patternTypes = Object.keys(patternSettings);

export const getTile = (type, width, height) => patternSettings[type]({width, height}).tileCoordinates;
