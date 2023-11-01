/**
 * Header-Logo(left),navitems(right)
 * Body
 *    -Restaurant List
 *       -Restaurant card
 *           -image,name,ratings,cuisines
 * Foooter-links,copyright
 */

import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
//import About from "./src/components/About";
const About = lazy(() => import("./src/components/About")); //chunking,Lazy loading,dynamic import,code splitting,Dynamic Bundling,On demand loading
import Contact from "./src/components/Contact";
import Cart from "./src/components/Cart";
import Profile from "./src/components/Profile";
import RestaurantDetail from "./src/components/RestaurantDetail";
import Shimmer from "./src/components/Shimmer";
import NotFound from "./src/components/NotFound";
//import Instaamart from "./src/components/Instaamart"; normal import

const Instaamart = lazy(() => import("./src/components/Instaamart")); //chunking,Lazy loading,dynamic import,code splitting,Dynamic Bundling,On demand loading
//upon ondemand loading=>upon render=>react suspend loading

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
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile", //parentPath/{path}=>localhost:1234/about/profile
            element: <Profile />,
          },
        ],
      },
      {
        path: "/",
        element: <Body />,
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
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instaamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
