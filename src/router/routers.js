import ComponentOne from "../views/ComponentOne";
import ComponentTwo from "../views/ComponentTwo";

let routes = [
  {
    path: "/",
    component: ComponentOne,
    exact: true,
  },
  {
    path: "/two",
    component: ComponentTwo,
  },
];

export default routes;
