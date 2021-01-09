module.exports = {
  client: {
    excludes: ["**/__tests__/**/*", "**/@sdk/**/*"],
    service: {
      name: "todajoia",
      url: "https://api.todajoia.com/graphql/",
    },
  },
};
