import {rotate90, rotate120, rotate180} from './geom/rotate';
import {translate1W1H, translate1W2H, translate2W2H, translate2W1H, translateShifted, translateHex } from './geom/translate';
import { mirror, mirrorHorizontal, mirrorVertical, mirrorDiagonalRL, mirrorDiagonalLR, mirrorHex, mirrorTriangle } from './geom/mirror';
import { split, rectCoords, triangleCoords, rightTriangleCoords } from './geom/util';
import glideTranslate from './geom/glideTranslate';
import { unnest } from 'ramda';

const linesToTile = (lines) => [unnest(lines)];

export default {
  p1({width, height, columns}) {
    return {
      steps: [],
      translate: translate1W1H(width, height, columns),
      tileCoordinates: rectCoords(width, height)
    };
  },
  p2({width, height, columns}) {
    return {
      steps: [rotate180({x: width / 2, y: height})],
      translate: translate1W2H(width, height, columns),
      tileCoordinates: rectCoords(width, height)
    };
  },
  pm({width, height, columns}) {
    return {
      steps: [mirrorVertical(width, height)],
      translate: translate1W2H(width, height, columns),
      tileCoordinates: rectCoords(width, height)
    };
  },
  pg({width, height, columns}) {
    return {
      steps: [glideTranslate(mirror([{x: 0, y: height / 2}, {x: width, y: height / 2}]), width, 0)],
      translate: translate2W1H(width, height, columns),
      tileCoordinates: rectCoords(width, height)
    };
  },
  cm({width, height, columns}) {
    return {
      steps: [mirrorHorizontal(width, height)],
      translate: translateShifted(width, height / 2, columns),
      tileCoordinates: triangleCoords(width, height)
    };
  },
  p2mm({width, height, columns}) {
    return {
      steps: [mirrorHorizontal(width, height), linesToTile, mirrorVertical(width, height)],
      translate: translate2W2H(width, height, columns),
      tileCoordinates: rectCoords(width, height)
    };
  },
  p2mg({width, height, columns}) {
    return {
      steps: [rotate180({x: width, y: height / 2}), linesToTile, mirrorHorizontal(width, height)],
      translate: translate2W2H(width, height, columns),
      tileCoordinates: rectCoords(width, height)
    };
  },
  p2gg({width, height, columns}) {
    return {
      steps: [rotate180({x: width / 2, y: height})],
      translate: translateShifted(width, height, columns),
      tileCoordinates: triangleCoords(width, height)
    };
  },
  c2mm({width, height, columns}) {
    return {
      steps: [
        mirrorHorizontal(width, height),
        mirrorVertical(width, height),
        mirrorHorizontal(width, height)
      ],
      translate: translateShifted(width, height, columns),
      tileCoordinates: rightTriangleCoords(width, height)

    };
  },
  p4({width, height, columns}) {
    const rotate = rotate90({x: width, y: height});
    return {
      steps: [rotate, rotate, rotate],
      translate: translate2W2H(width, height, columns),
      tileCoordinates: rectCoords(width, height)
    };
  },
  p4mm({width, height, columns}) {
    const rotate = rotate90({x: width, y: height});
    return {
      steps: [
        mirrorDiagonalRL(width, height),
        linesToTile,
        rotate,
        rotate,
        rotate
      ],
      translate: translate2W2H(width, height, columns),
      tileCoordinates: [
        {x: 0, y: 0},
        {x: width, y: height},
        {x: 0, y: height}
      ]

    };
  },
  p4mg({width, height, columns}) {
    const rotate = rotate90({x: width, y: height});
    return {
      steps: [
        mirrorDiagonalLR(width, height),
        linesToTile,
        rotate,
        rotate,
        rotate
      ],
      translate: translate2W2H(width, height, columns),
      tileCoordinates: rightTriangleCoords(width, height)
    };
  },
  p3({width, height, columns}) {
    const rotate = rotate120({x: width / 2, y: height / 2});
    return {
      steps: [rotate, rotate],
      translate: translateHex(width, height, columns)
    };
  },
  p3m1({width, height, columns}) {
    const rotate = rotate120({x: width / 2, y: height / 2});

    return {
      steps: [
        mirrorHex(width, height),
        linesToTile,
        rotate,
        rotate
      ],
      translate: translateHex(width, height, columns)
    };
  },
  p31m({width, columns}) {
    const height = Math.sqrt(3) / 2 * width / 3 * 2;
    const rotate = rotate120({x: width / 3, y: 2 * height / 3});

    return {
      steps: [
        rotate,
        rotate,
        linesToTile,
        mirrorTriangle(width, height)
      ],
      translate: translateShifted(width / 3 * 2, height, columns)
    };
  },
  p6({width, columns}) {
    const height = Math.sqrt(3) / 2 * width / 3 * 2;
    const rotate = rotate120({x: width / 3, y: 2 * height / 3});

    return {
      steps: [
        rotate,
        rotate,
        linesToTile,
        rotate180(split({x: width / 3, y: 0}, {x: width / 3 * 2, y: height}, 0.5))
      ],
      translate: translateShifted(width / 3 * 2, height, columns)

    };
  }
};

