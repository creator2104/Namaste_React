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