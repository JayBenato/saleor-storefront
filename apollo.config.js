module.exports = {
  client: {
    excludes: ["**/__tests__/**/*", "**/@sdk/**/*"],
    service: {
      name: "Toda Joia",
      url: "https://api.todajoia.com/graphql/",
    },
  },
};
