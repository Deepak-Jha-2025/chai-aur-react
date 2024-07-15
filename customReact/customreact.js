
/*
    This is custom React. In React also, there is a method like below written
    which continously keeps on creating the domElement and the element's tree
    keeps forming like shown in the reactElement object and then it gets injected
    in the document
*/

function customRender(reactElement, container) {
    /*
        // Take a dom element and create it using the reactElement's type to make it more modular
        const domElement = document.createElement(reactElement.type)

        // Now, this new dom element/container is empty, so insert a few values in it
        domElement.innerHTML = reactElement.children // a child added to the element

        // Set its attributes
        domElement.setAttribute('href', reactElement.props.href)
        domElement.setAttribute('target', reactElement.props.target)

        // Add this new element to the container provided
        container.appendChild(domElement)
    */

    // Making it more modular
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    // Setting its attributes using a loop this time
    for (const prop in reactElement.props) {
        // Now just go to each element of props obj and take its value as the attribute for domElement

        if (prop === 'children') continue; // just a safety check since previously sometimes 'children' prop used to be inside props
        domElement.setAttribute(prop, reactElement.props[prop])
    }

    container.appendChild(domElement)
}

// Now, we want to see that the html that our fnc returns, how React views it
// Any element given to react is evaluated as shown below: 
const reactElement = {
    // React tries to make a tree with an element
    // We can return a fragment of many tags like h1, p, a, any tag with properties

    type: 'a', // this tells the type of element (div or p or a)
    props: {
        // this tells the propeties
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

/*
    Above, we made an element but actually React is responsible behind this, 
    So, we get this element throught React, but for now, we're writing our
    own customized react, so we've set it such that anyone who uses our library
    has to write every element in this way only
*/

const mainContainer = document.querySelector('#root')

// Now, a method to render/add/inject the element into the root div
customRender(reactElement, mainContainer)