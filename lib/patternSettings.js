'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _geomRotate = require('./geom/rotate');

var _geomTranslate = require('./geom/translate');

var _geomMirror = require('./geom/mirror');

var _geomUtil = require('./geom/util');

var _geomGlideTranslate = require('./geom/glideTranslate');

var _geomGlideTranslate2 = _interopRequireDefault(_geomGlideTranslate);

var _ramda = require('ramda');

var linesToTile = function linesToTile(lines) {
  return [_ramda.unnest(lines)];
};
exports['default'] = {
  p2: function p2(_ref) {
    var width = _ref.width;
    var height = _ref.height;
    var columns = _ref.columns;

    return {
      steps: [_geomRotate.rotate180({ x: width / 2, y: height })],
      translate: _geomTranslate.translate1W2H(width, height, columns),
      tileCoordinates: _geomUtil.rectCoords(width, height)
    };
  },
  pm: function pm(_ref2) {
    var width = _ref2.width;
    var height = _ref2.height;
    var columns = _ref2.columns;

    return {
      steps: [_geomMirror.mirrorVertical(width, height)],
      translate: _geomTranslate.translate1W2H(width, height, columns),
      tileCoordinates: _geomUtil.rectCoords(width, height)
    };
  },
  pg: function pg(_ref3) {
    var width = _ref3.width;
    var height = _ref3.height;
    var columns = _ref3.columns;

    return {
      steps: [_geomGlideTranslate2['default'](_geomMirror.mirror([{ x: 0, y: height / 2 }, { x: width, y: height / 2 }]), width, 0)],
      translate: _geomTranslate.translate2W1H(width, height, columns),
      tileCoordinates: _geomUtil.rectCoords(width, height)
    };
  },
  cm: function cm(_ref4) {
    var width = _ref4.width;
    var height = _ref4.height;
    var columns = _ref4.columns;

    return {
      steps: [_geomMirror.mirrorHorizontal(width, height)],
      translate: _geomTranslate.translateShifted(width, height / 2, columns),
      tileCoordinates: _geomUtil.triangleCoords(width, height)
    };
  },
  p2mm: function p2mm(_ref5) {
    var width = _ref5.width;
    var height = _ref5.height;
    var columns = _ref5.columns;

    return {
      steps: [_geomMirror.mirrorHorizontal(width, height), linesToTile, _geomMirror.mirrorVertical(width, height)],
      translate: _geomTranslate.translate2W2H(width, height, columns),
      tileCoordinates: _geomUtil.rectCoords(width, height)
    };
  },
  p2mg: function p2mg(_ref6) {
    var width = _ref6.width;
    var height = _ref6.height;
    var columns = _ref6.columns;

    return {
      steps: [_geomRotate.rotate180({ x: width, y: height / 2 }), linesToTile, _geomMirror.mirrorHorizontal(width, height)],
      translate: _geomTranslate.translate2W2H(width, height, columns),
      tileCoordinates: _geomUtil.rectCoords(width, height)
    };
  },
  p2gg: function p2gg(_ref7) {
    var width = _ref7.width;
    var height = _ref7.height;
    var columns = _ref7.columns;

    return {
      steps: [_geomRotate.rotate180({ x: width / 2, y: height })],
      translate: _geomTranslate.translateShifted(width, height, columns),
      tileCoordinates: _geomUtil.triangleCoords(width, height)
    };
  },
  c2mm: function c2mm(_ref8) {
    var width = _ref8.width;
    var height = _ref8.height;
    var columns = _ref8.columns;

    return {
      steps: [_geomMirror.mirrorHorizontal(width, height), _geomMirror.mirrorVertical(width, height), _geomMirror.mirrorHorizontal(width, height)],
      translate: _geomTranslate.translateShifted(width, height, columns),
      tileCoordinates: _geomUtil.rightTriangleCoords(width, height)

    };
  },
  p4: function p4(_ref9) {
    var width = _ref9.width;
    var height = _ref9.height;
    var columns = _ref9.columns;

    var rotate = _geomRotate.rotate90({ x: width, y: height });
    return {
      steps: [rotate, rotate, rotate],
      translate: _geomTranslate.translate2W2H(width, height, columns),
      tileCoordinates: _geomUtil.rectCoords(width, height)
    };
  },
  p4mm: function p4mm(_ref10) {
    var width = _ref10.width;
    var height = _ref10.height;
    var columns = _ref10.columns;

    var rotate = _geomRotate.rotate90({ x: width, y: height });
    return {
      steps: [_geomMirror.mirrorDiagonalRL(width, height), linesToTile, rotate, rotate, rotate],
      translate: _geomTranslate.translate2W2H(width, height, columns),
      tileCoordinates: [{ x: 0, y: 0 }, { x: width, y: height }, { x: 0, y: height }]

    };
  },
  p4mg: function p4mg(_ref11) {
    var width = _ref11.width;
    var height = _ref11.height;
    var columns = _ref11.columns;

    var rotate = _geomRotate.rotate90({ x: width, y: height });
    return {
      steps: [_geomMirror.mirrorDiagonalLR(width, height), linesToTile, rotate, rotate, rotate],
      translate: _geomTranslate.translate2W2H(width, height, columns),
      tileCoordinates: _geomUtil.rightTriangleCoords(width, height)
    };
  },
  p3: function p3(_ref12) {
    var width = _ref12.width;
    var height = _ref12.height;
    var columns = _ref12.columns;

    var rotate = _geomRotate.rotate120({ x: width / 2, y: height / 2 });
    return {
      steps: [rotate, rotate],
      translate: _geomTranslate.translateHex(width, height, columns)
    };
  },
  p3m1: function p3m1(_ref13) {
    var width = _ref13.width;
    var height = _ref13.height;
    var columns = _ref13.columns;

    var rotate = _geomRotate.rotate120({ x: width / 2, y: height / 2 });

    return {
      steps: [_geomMirror.mirrorHex(width, height), linesToTile, rotate, rotate],
      translate: _geomTranslate.translateHex(width, height, columns)
    };
  },
  p31m: function p31m(_ref14) {
    var width = _ref14.width;
    var columns = _ref14.columns;

    var height = Math.sqrt(3) / 2 * width / 3 * 2;
    var rotate = _geomRotate.rotate120({ x: width / 3, y: 2 * height / 3 });

    return {
      steps: [rotate, rotate, linesToTile, _geomMirror.mirrorTriangle(width, height)],
      translate: _geomTranslate.translateShifted(width / 3 * 2, height, columns)
    };
  },
  p6: function p6(_ref15) {
    var width = _ref15.width;
    var columns = _ref15.columns;

    var height = Math.sqrt(3) / 2 * width / 3 * 2;
    var rotate = _geomRotate.rotate120({ x: width / 3, y: 2 * height / 3 });

    return {
      steps: [rotate, rotate, linesToTile, _geomRotate.rotate180(_geomUtil.split({ x: width / 3, y: 0 }, { x: width / 3 * 2, y: height }, 0.5))],
      translate: _geomTranslate.translateShifted(width / 3 * 2, height, columns)

    };
  }
};
module.exports = exports['default'];