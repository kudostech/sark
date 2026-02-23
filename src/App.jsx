import Navbar from "./components/Navbar"
import Herosection from "./components/Herosection"
import Calculator from "./components/Calculator"
import Pricing from "./components/Pricing"
function App() {
  return (
  <div className=" overflow-x-hidden">
    <Navbar/>
    <Herosection/>
    <Calculator/>
    <Pricing/>
  </div>
  )
}

export default App
