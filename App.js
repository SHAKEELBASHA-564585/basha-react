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
import NotFound from "./src/components/NotFound";

import { createBrowserRouter, RouterProvider, link } from "react-router-dom";

//Submittion for all Components
const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
  },
  {
    path: "/About",
    element: <About />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
