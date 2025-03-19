import React from "react";
import ReactDOM from "react-dom/client";
import { jsx } from "react/jsx-runtime";

//React element

// const heading = React.createElement("h1",{id:"heading"},"Namaste react")

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)

//JSX

const jsxheading = <h1 id="heading" className="head">Namaste react in JSX</h1>
//use camelcase to give attribute to jsx
// Js engine can't understand JSX it is done by parcel
// the code is being transpiled(converted JSX into react or browser understanding) before entering into JS engine by parcel (parcel gives this work of traspilation to Babel) 
// JSX => Babel transapiles it to React.createElement (transpiled) => ReactElement - JS Object => HTMLElement(render) (babel is converting this stuff) 
// Babel is a Js compiler
// JSX is not HTML in JS 
// JSX have HTML or XML likely syntax
// React and JSX are both different
// console.log(heading);
//both heading and jsxheading are same object
console.log(jsxheading)
root.render(jsxheading)

//React element
const jsxheading2 = (<h1 id="heading" className="head">
    Namaste react in JSX
    </h1>)
//if u write like above in mutiple line then use () braces so babel can understand where jsx starting and ending


// React components
// Class based components - old way
// Functional componennts - new way


// React functional components - its a just js function which returns a piece code of jsx
const Heading = () => {
    return <h1>Namaste react functional components</h1>
}