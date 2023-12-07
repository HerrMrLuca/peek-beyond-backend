module.exports = {
  routes: [
    {
      method: "GET",
      path: "/latest",
      handler: "category.findLatest",
    },
    {
      method: "GET",
      path: "/:id/projects",
      handler: "category.projectsByCategory",
    },
  ],
};
