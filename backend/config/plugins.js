module.exports = ({ env }) => ({
  upload: {
    config: {
      providerOptions: {
        sizeLimit: 5 * 1024 * 1024, // 5 MB
        localServer: {},
      },
    },
  },
});
