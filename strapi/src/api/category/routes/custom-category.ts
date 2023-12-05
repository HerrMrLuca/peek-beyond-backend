module.exports = {
  routes: [
    {
      method: "GET",
      path: "/latest",
      handler: "category.findLatest",
    },
  ],
};
