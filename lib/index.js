'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ramda = require('ramda');

var _patternSettings = require('./patternSettings');

var _patternSettings2 = _interopRequireDefault(_patternSettings);

var calculateTile = function calculateTile(lines, settings) {
  return settings.steps.reduce(function (r, step) {
    return step(r);
  }, [lines]);
};

var createTile = _ramda.pipe(calculateTile, _ramda.unnest);

var add = _ramda.curry(function (p1, p2) {
  return { x: p1.x + p2.x, y: p1.y + p2.y };
});

var translateTile = _ramda.curry(function (transition, line) {
  return _ramda.map(add(transition), line);
});

var translate = _ramda.curry(function (tile, transition) {
  return _ramda.map(translateTile(transition), tile);
});

exports['default'] = function (_ref) {
  var type = _ref.type;
  var width = _ref.width;
  var height = _ref.height;
  var columns = _ref.columns;
  var rows = _ref.rows;
  var lines = _ref.lines;

  var settings = _patternSettings2['default'][type]({ width: width, height: height, columns: columns });
  var tile = createTile(lines, settings);
  var numberOfTiles = columns * rows;
  return _ramda.pipe(_ramda.range(0), _ramda.map(settings.translate), _ramda.map(translate(tile)))(numberOfTiles);
};

var patternTypes = Object.keys(_patternSettings2['default']);

exports.patternTypes = patternTypes;
var getTile = function getTile(type, width, height) {
  return _patternSettings2['default'][type]({ width: width, height: height }).tileCoordinates;
};
exports.getTile = getTile;