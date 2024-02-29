import Component1 from "./components/Component1"
import Component2 from "./components/Component2"
import Component3 from "./components/Component3"
import ParentComponent from "./components/ParentComponent"

import { MyContextProvider } from './MyContext';

function App() {

  return (
    <>
      <h1>React Context</h1>

      <MyContextProvider>

        <ParentComponent>
          <Component1 />
          <Component2 />
        </ParentComponent>

        <Component3 />

      </MyContextProvider>


    </>
  )
}

export default App
