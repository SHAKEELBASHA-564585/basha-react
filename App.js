/**
 * Header-Logo(left),navitems(right)
 * Body
 *    -Restaurant List
 *       -Restaurant card
 *           -image,name,ratings,cuisines
 * Foooter-links,copyright
 */

import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import RestaurantDetail from "./src/components/RestaurantDetail";
import NotFound from "./src/components/NotFound";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//Submittion for all Components
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* power of Outlet is, it will takes the children into it and display in ui without rendering total ui */}
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetail />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
