import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import {Header} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter , RouterProvider , Outlet} from "react-router";
// RouterProvider will provide config to our app
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const Applayout = () => {
    return (
        <div className="app">
          <Header/>
          <Outlet/>
          {/* if path is / then body page will work */}
          {/* <Body/> */}
          {/* if path is /about then about page will work */}
          {/* <About/> */}
          {/* if path is /contact then contact page will work */}
          {/* <Contact/> */}

          <Footer/>
        </div>
    )
}

// below we have created configuration and we have to pass it to render 
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children:[
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path:"/restaurants/:resId",
        // : means its a dynamic it would change acording to the data
        element:<RestaurantMenu/>
      }
    ],
    errorElement:<Error/>
  },
  ]
)
// configuration means some infomrmation that will define what will be happen in specific route
// createBrowserRouter will take a list of paths , path is just an array of object
// a page is a component in react

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)