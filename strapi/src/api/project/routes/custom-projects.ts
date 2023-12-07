export default {
  routes: [
    {
      method: "GET",
      path: "/projects",
      handler: "project.find",
      //controller.action
    },
    {
      method: "GET",
      path: "/projects/latest",
      handler: "project.findLatest",
    },
    {
      method: "GET",
      path: "/projects/:id",
      handler: "project.findOne"
    },
    //----------- category -------------
    {
      method: "GET",
      path: "/projects/category/all/:id",
      handler: "project.projectsByCategory",
    },
    {
      method: "GET",
      path: "/projects/category/all",
      handler: "project.projectsByMainCategories",
    },
    {
      method: "GET",
      path: "/projects/category/main/:id",
      handler: "project.projectsByMainCategory",
    },

  ],
};
