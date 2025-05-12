# Parcel
- Dev build
- Local server
- HMR = Hot Module Replacement
- File watching algorithm (written in C++)
- Caching (Faster Builds)
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code splitting 
- Differential Bundling - support older browsers
- Great Error suggestions and handleling
- Diagnostic
- HTTPs
- Tree shaking - remove unused code 

# Food Ordering App
 * 
 * Header
 * -Logo
 * -Nav items
 * 
 * Body
 * -Search
 * -RestaunrantContainer
 *   - RestaunrantCard
 *    - img
 *    - Name of res , Star rating , cuisine , delivery time
 * 
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact  


 # Two types of Export/Import

- Default Export/Import

export default Component
import Component from "path";

- Named Export/Import

export const Component
import {Component} from "path"

# React Hooks
(Normal js utility function written by the facebook developers) which is given by react to us
-useState() - Superpowerful State Variables in react
-useEffect()

# whenever a state variable updates react re-renders the component

# Monolith architecture

# Micro services - single responsibilty principle
#                - separation of concerns
#                - Each and every service has its own job 
#                - everyone has separate project 

# Two approaches that how ui fetch the data from backend
1. as soon as our page loads we can make an api call wait for data to come then we render the UI

Loads --> API --> Render

2. as soon as our page loads we will quickly render it and then we will make an api call and as soon as we get the result from the api we will re-render with the new data

Loads --> Render --> API --> Render

most of the time in react we use 2nd approaoch bcz it gives the better UX (atleast we can see sceleton on screen from quick rendering)  - useEffect is used here 

# react have fastest render mechanism 

# CORS - cross origin resource sharing
- It helps to share resources between two webpack
- It uses cors preflight mechanism
  
# currently all industry follows shimmer UI  

# There are two types of routing 
- Client side routing 
- Server side routing 

# HOOKS
1. createBrowserRouter - for routing components
2. RouterProvider - provides routing configurations to our app (its  a component)
3. Outlet - it is used as component (outlet filled with change of the path in his component, used for children routes) 
4. useRouteError - to handle error page in web 

use link instead of a for link redirection because it dosent refresh whole page it refreshes the component only
<Link to=""></Link>

5. useParams - useParams is a hook that returns an object containing the values of the dynamic parameters defined in your route path. 
How to use it:
 1. Import: Import useParams from react-router-dom. 
 2. Define a route: In your routing configuration, define a route with dynamic parameters (e.g., /users/:id). 
 3. Access in component: In the component that renders when the route matches, use useParams to access the dynamic parameters.   

Dynamic Routing: This hook is crucial for building dynamic and interactive web applications where content changes based on URL parameters.

# Two types of routing 
1. client side routing 
2. server side routing 

1. Client-Side Routing:
In client-side routing, the navigation between pages is handled entirely in the browser without making a full request to the server.

🚀 How It Works:
Uses the HTML5 History API (pushState, replaceState, and popState).

URL changes without reloading the page.

JavaScript intercepts the navigation and renders the correct component.

✅ Advantages:
Fast Navigation: No full-page reloads; only the necessary components are re-rendered.

Smooth User Experience: Feels like a single-page application (SPA).

Reduced Server Load: Server sends the application once, and the client handles the rest.

❌ Disadvantages:
Initial Load Time: The first load might be slower due to loading the entire JavaScript bundle.

SEO Challenges: Search engines may not effectively index dynamic content.

404 Errors: Directly accessing a route may result in a "Not Found" error if not properly configured.

In server-side routing, the server handles every navigation by sending a new HTML page upon each request.

🚀 How It Works:
A link click triggers a new HTTP request to the server.

The server responds with a new HTML page.

The entire page reloads.

⚙️ Example: Traditional Websites

<a href="/about">About</a>


2. Server-Side Routing:

In server-side routing, the server handles every navigation by sending a new HTML page upon each request.

✅ Advantages:
SEO-Friendly: Since the server sends pre-rendered HTML, it's easily crawled by search engines.

Simple to Implement: Especially with traditional backend frameworks like Django, Laravel, or PHP.

No 404 Issues: Direct URL access works naturally.

❌ Disadvantages:
Slower Navigation: Each page load requires a full server round-trip.

Less Interactive: No smooth transitions between pages.

Increased Server Load: Each click results in a new page request.


* class based components :-
