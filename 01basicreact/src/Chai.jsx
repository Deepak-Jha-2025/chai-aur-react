function Chai () {
    return (
        <h2>chai in react</h2>
    )
}

export default Chai

// these fncs that we are exporting are called 'components'

/*
    Best practices:
    1. capitalize the name of the components

    2. capitalize the file name of the components (App.js, Chai.js)
    
    3. some libraries (like Vite) force us to name the component file with the .jsx extension only
       b/z for components, it's needed 

    4. in our basic create-react-apps also, we follow the convention that: 
        if some html is returned from the component, we'll name the file as .jsx
        if not, then we'll name it .js
*/