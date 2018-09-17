let comp = $("#plans");
const routes = [{ path: "/", component: comp }];

new VueRouter({
  el: "#routes",
  path: "/home",
  name: "hello",
  data: {
    routes
  }
});

/*const rou = new Vue({
  el: "#routes",
  data: { routes }
});*/

// const nume = ["john", "mary", "ion"];

// const arata = new Vue({
//   el : "#routes"
//   data:
// });
console.log(routes);
