import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

// // Any html inside the fnc is going to be parsed into such a format only, then why not take that format itself
// const ReactElement = {
//     type: 'a', // this tells the type of element (div or p or a)
//     props: {
//         // this tells the propeties
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="http://google.com" target='_blank'>Visit Google</a>
)

const anotherUser = 'chai aur react'

// Making the element according to React and not customly
const reactElement = React.createElement(
    // special/pre-defined syntax (expected to be given in the exact way as shown)

    'a', // 1st parameter: tag type
    {
        // 2nd para: object of props/attributes, this is like setAttribute() fnc
        href: 'https://google.com',
        target: '_blank'
    },
    // 3rd para: direct text
    'click me to visit google',

    // After the entire tree of this object/element is formed, then comes the variable injections
    // And the var are injected directly as it is evaluated expression (we can't write the evaluation itself like if-else, or others)
    anotherUser
)


ReactDOM.createRoot(document.getElementById('root')).render(

    // <MyApp /> // it's just a function (either declared in this file itself or imported from other file) but this is JSX syntax

    /*
    So, where does this syntax come from? Every React uses a bundler like Vite, and it's thie bundler's job behind the scenes
    to improve the syntax, upgrade the syntax. Now the reactElement object syntax in the './customreact.js' file that we wrote,
    to convert into that syntax is also the role of bundler. 
    
    So, we do return the html syntax, but React does not understand it, (hence called JSX, html mixed in js), we know theat 
    only the js obj syntax can be converted into tree. So, the html syntax is parsed into a tree/js syntax
    */

    // MyApp() // since it's a fnc after all, but this a bad practice
    
    reactElement

    // <App />
)
