export default {
  routes: [
    {
      method: "GET",
      path: "/projects/latest",
      handler: "project.findLatest",
      //controller.action
    },
    {
      method: "GET",
      path: "/projects/:id",
      handler: "project.findOne"
    }
  ],
};
