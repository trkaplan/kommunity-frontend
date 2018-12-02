module.exports = () => {
  return ({ addVariant }) => {
    addVariant('disabled', ({ modifySelectors, separator }) => {
      modifySelectors(({ className }) => {
        return `.disabled${separator}${className}:disabled`;
      });
    });
  };
};
