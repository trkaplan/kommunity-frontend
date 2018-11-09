export const isServer = () => {
  return process.env.BUILD_TARGET === 'server';
};
