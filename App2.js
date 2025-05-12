import React from "react";
import ReactDOM from "react-dom/client";

//React element => Object => HTMLElement(render)
// at the end of the day react is a js and js is an object so react element is an object

// const heading = React.createElement("h1",{id:"heading"},"Namaste react")
//this is how you create react element using react

// root.render(heading)

//JSX

const jsxheading = <h1 className="head">Namaste react in JSX</h1>
//this is how u create react element using JSX

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(jsxheading)
//use camelcase to give attribute to jsx (ex :- className)

// Js engine can't understand JSX it is done by parcel

// the code is being transpiled(converted JSX into react or browser understanding) before entering into JS engine by Babel (parcel gives this work of traspilation to Babel) 

// JSX => Babel transapiles it to React.createElement (transpiled) => ReactElement - JS Object => HTMLElement(render) (babel is converting this stuff) 

// Babel is a Js compiler

// JSX is not HTML in JS

// JSX have HTML or XML likely syntax

// React and JSX are both different
 
// console.log(heading);
//both heading and jsxheading are same object bcz jsx is converted into react element by babel at the end
// console.log(jsxheading)


//React element
const elem = <span>React element</span>
const jsxheading2 = (<h1 id="heading" className="head">
    Namaste react in JSX2
    </h1>)
//if u write like above jsx in mutiple lines then use () braces so babel can understand where jsx starting and ending

// If a function returns a react element its known as react components

// React components
// Class based components - old way
// Functional componennts - new way

// write a noraml js function and return jsx into it
// React functional component
// const Title = function(){
//     return(
//     <h1 className="heading">
//     Namaste react using JSX
//     </h1>
// )}

// write first capital letter in name of react component (Title)

// else 

// write like this(preferrable way in industry)
const Title = () => (
    <h1 className="heading">
    {elem}
    Namaste react using JSX
    </h1>
)

const number = 1000
// const data = api.getData()
// React functional components - its a just js function which returns a piece code of jsx or a react element 
const Heading = () => (
    <div id="container">
    <h1 className="heading">Namaste react functional components</h1>

        {jsxheading}

        {/* {data} */}
        {/* suppose we are fetching api and some hacker doing cross-site scripting attack then jsx would not blindly run it in curly braces , it will sanitize your data and then pass it to u (it prevents this kinda attacks so feel free to use api or anything in jsx)*/}
 
        <Title />  
        {/* else you can write like below */}
        {Title()}
        {/* at the end of the day react component is a normal js function so you can call it directly */}
        {/* else you can write like below */}
        <Title></Title>
        {/* if i want to render(add) title inside div container then write like above and this thing is known as composite composition (you're composing two composite to one another)*/}
        
        <h2>{number}</h2>
        <h2>{100+200}</h2>
        <h2>{console.log("vinit")}</h2>
        {/* between two curly braces you can write any js code */}

        {jsxheading2}
        {/* this react element is end of the day its a js so u can write in curly braces*/}
    </div>
)

// const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Heading/>)
// only react element can be rendered directly ex:- (heading) but to render react component u have to wrape it in </>(<heading/>)
//by this difference of brackets babel can understand which is react component and which is react element
 

// To write HTML on multiple lines, put the HTML inside parentheses:
// Create a list with three list items:
// const myElement = (
//     <ul>
//       <li>Apples</li>
//       <li>Bananas</li>
//       <li>Cherries</li>
//     </ul>
//   );


// The HTML code must be wrapped in ONE top level element.
// So if you like to write two paragraphs, you must put them inside a parent element, like a div element.
// Wrap two paragraphs inside one DIV element:
// const myElement = (
//   <div>
//   <p>I am a paragraph.</p>
//   <p>I am a paragraph too.</p>
// </div>
// );


// Alternatively, you can use a "fragment" to wrap multiple lines. This will prevent unnecessarily adding extra nodes to the DOM.
// A fragment looks like an empty HTML tag: <></>.
// Wrap two paragraphs inside a fragment:
// const myElement = (
//     <>
//       <p>I am a paragraph.</p>
//       <p>I am a paragraph too.</p>
//     </>
//   );


// JSX follows XML rules, and therefore HTML elements must be properly closed.
// const myElement = <input type="text" />;
// JSX will throw an error if the HTML is not properly closed.


// React supports if statements, but not inside JSX.
// Use ternary expressions instead:
// Note that in order to embed a JavaScript expression inside JSX, the JavaScript must be wrapped with curly braces, {}.
// const x = 5;
// const myElement = <h1>{(x) < 10 ? "Hello" : "Goodbye"}</h1>;

// Lexicographically - remember for js interviews