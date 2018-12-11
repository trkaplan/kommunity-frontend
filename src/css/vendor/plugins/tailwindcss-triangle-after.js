/* eslint-disable sort-keys */
// Forked from: https://github.com/chrisrowe/tailwindcss-triangle-after

// eslint-disable-next-line import/no-extraneous-dependencies
const _ = require('lodash');

module.exports = function triangleAfter({ triangles, variants }) {
  const baseTriangle = {
    borderColor: 'transparent',
    borderStyle: 'solid',
    content: '""',
    height: 0,
    pointerEvents: 'none',
    position: 'absolute',
    width: 0,
  };

  function getTriangle(triangle) {
    const triangleStyles = { ...baseTriangle };

    const tY = `${triangle.size[1]}px`;
    const tX = `${triangle.size[0] / 2}px`;
    triangleStyles.borderTopColor = triangle.color;
    triangleStyles.borderWidth = [tY, tX, 0, tX].join(' ');

    return triangleStyles;
  }

  return function results({ e, addUtilities }) {
    const utilities = _.map(triangles, (triangle, name) => ({
      [`.triangle-after-${e(name)}`]: {
        height: `${triangle.size[0] / 2}px`,
        width: `${triangle.size[1]}px`,
        position: 'relative',
      },
      [`.triangle-after-${e(name)}::after`]: getTriangle(triangle),
    }));
    addUtilities(utilities, variants);
  };
};
