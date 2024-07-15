import { useState } from 'react' // from here we can import any hooks for use
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // This state is responsible for changing state (here change doesn't mean changing values,
  // but means that change is propagated in our UI / DOM)

  // return value: an array of 2 things, hence using [] to store it (general names)
  // 0th idx = var (a value)
  // 1th idx = fnc (a fnc used to update the 0th idx value counter)
  let [counter, setCounter] = useState(15) // 15 = default value of counter variable

  // let counter = 15 // updating this variable won't reflect on the UI

  const addValue = () => {
    // counter = counter + 1 // not reflected on UI (here the UI updateion is controlled by React (using hooks))

    // arg: new value to set into the counter var
    if (counter + 1 <= 20) {
      setCounter(counter + 1) // updates counter everywhere on the UI
    }
    /*
    When setCounter is passed with the variable, then automatically the entire DOM is analyzed to figure out
    on which places we need to update the values b/z the states have been changed (which are now synced with the UI)
    */
  }

  const removeValue = () => {
    if (counter - 1 >= 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value {counter} </button>
      <br />
      <button
        onClick={removeValue}
      >remove value {counter} </button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
