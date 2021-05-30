import React from "react";
import {
  useLocation
} from "react-router-dom";

import MainPage from 'containers/MainPage';
import PostNews from 'containers/PostNews';
import ViewDetails from 'containers/ViewDetails';
//ex routes
// const routes = [
//   {
//     path: "/sandwiches",
//     component: Sandwiches
//   },
//   {
//     path: "/tacos",
//     component: Tacos,
//     routes: [
//       {
//         path: "/tacos/bus",
//         component: Bus
//       },
//       {
//         path: "/tacos/cart",
//         component: Cart
//       }
//     ]
//   }
// ];

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

const routes = [
  {
    path: "/",
    component: MainPage,
    exact: true
  },
  {
    path: "/dang-tin",
    component: PostNews,
    exact: false
  },
  {
    path: "/view-details",
    component: ViewDetails,
    exact: false
  },
  {
    path: "*",
    component: NoMatch,
    exact: false
  }
];

export { routes };