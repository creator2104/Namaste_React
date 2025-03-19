import React from "react";
// "react" refers to node_modules packaage named react and same for react-dom
import ReactDOM from "react-dom/client";

// the below one React came from cdn links
const heading = React.createElement(
"h1",
// create element belongs from react
// react element(heading) is just a js object
{ id: "heading", xyz: "abc" },  "Hello from react!");
// above line is known as props and "hello from react" is children which will go inside h1 tag 
// id and xyz is known as attributes
// console.log(heading);  //object
const root = ReactDOM.createRoot(document.getElementById("root"));
// create root belongs from react DOM so we have to create root from ReactDOM
root.render(heading);
// attach heading into the root
// render method convert the object into html h1 tag while rendering 
//ReactElement(object) => HTML(Browser Understands)



// <div id="parent">
// <div id="child">
// <h1>I'm an h1 tag</h1>
// <h2>I'm an h2 tag</h2>
// </div>
// <div id="child2">
// <h1>I'm an h1 tag</h1>
// <h2>I'm an h2 tag</h2>
// </div>
// </div>
 
//if u have element siblings then write it in array format 

// const parent = React.createElement("div",{id:"parent"},
//    [ 
//      React.createElement("div",{id:"child"},
//      [React.createElement("h1",{},"I'm an h1 tag"),React.creteElement("h2",{},"I'm an h2 tag") ])
//      React.createElement("div",{id:"child"},
//      [React.createElement("h1",{},"I'm an h1 tag"),React.creteElement("h2",{},"I'm an h2 tag") ])
//    ])   

// to remove above array kinda complexity use jsx  

// console.log(parent);   // it gives an object at output
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent) 
