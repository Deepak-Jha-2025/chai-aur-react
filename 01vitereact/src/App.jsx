
import Chai from "./chai"

function App() {
  // How to inject variable/js in the JSX file
  /*
    To inject a variable, insert it in {}
    This is called expression or evaluated expression meaning here we don't write the entire Js
    but the final outcome which has been evaluated
  */
  const username = 'chai aur code'


  // rule of JSX
  // we can export/return only one element at a time, so in case of multiple elements, wrap them in a div

  // but as we'll do this many times, so we have now a feature to just wrap it in < >...</ > instead of <div></div>
  return (

    // <div>
    // so instead of div, we're now returning what is called a 'fragment'
    <>
      < Chai />
      <h1>chai aur react {username}</h1>  
      <p>test para</p>
    </>
    // </div>
  )
}

export default App
