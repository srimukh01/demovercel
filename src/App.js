import { BrowserRouter } from "react-router-dom"
import { Route } from "react-router-dom"
import { Routes } from "react-router-dom"
import Home from "./Home"
import Reg from "./Register"

function App()
{
  return(
    <>

      <h1>I am App</h1>
      <BrowserRouter>
      <Routes>
        <Route path = "/reg" element = {<Reg/>}></Route>
        <Route path = "/h" element = {<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App