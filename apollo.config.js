module.exports = {
  client: {
    excludes: ["**/__tests__/**/*", "**/@sdk/**/*"],
    service: {
      name: "todajoia",
      url: "http://ec2-15-161-219-112.eu-south-1.compute.amazonaws.com:8000/graphql/",
    },
  },
};
