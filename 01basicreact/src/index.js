// This file is the main entry point of React in src folder


// We've imported 2 libraries here, b/z these 2 are used to manipulate the web-dom
import React from 'react'; // core foundational library: handles references
import ReactDOM from 'react-dom/client'; // this is an implementation of the react library on web (just like react-native is for mobile apps)

import App from './App';

/*
  in website, we have dom, but react makes its own dom (called the virtual DOM), then it compares it with the main dom/web dom 
  and sees how much is the difference and then changes only the required elements in the main dom (no need to change them all)
  and this react dom is what we're using in the code below ReactDOM.createRoot()

  we selected an element from index.html using the createRoot() function, then gave all the ref of thie ele & virtual dom
  to a variable root
*/
const root = ReactDOM.createRoot(document.getElementById('root'));

/*
  Now, just like the browser's dom renders our html, same implementation is below.
  
  It renders in strict mode of react (a react property), in there it renders <App />
  which is not a defined tag in html, but this is what React gives us, JSX, the ability
  to render html elements through Js (JSX almost seems like html) 

  This is like making our own custom tags!
*/
root.render(
  
    <App />
  
);

