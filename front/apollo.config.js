module.exports = {
  client: {
    service: {
      name: "test-simoh",
      url: process.env.REACT_APP_API,
    },
    excludes: ["**/*.{ts,tsx,js,jsx}"],
  },
};
