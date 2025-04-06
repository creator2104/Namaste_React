import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import {Header} from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
// RouterProvider will provide config to our app
import About from "./components/About";

const Applayout = () => {
    return (
        <div className="app">
          <Header/>
          <Body/>
          <Footer/>
        </div>
    )
}

// below we have created configuration and we have to pass it to render 
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />
  },
  {
    path: "/about",
    element: <About />
  }]
)
// configuration means some infomrmation that will define what will be happen in specific route
// createBrowserRouter will take a list of paths , path is just an array of object
// a page is a component in react

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)