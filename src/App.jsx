import Navbar from "./components/Navbar"
import Herosection from "./components/Herosection"
import Calculator from "./components/Calculator"
import Pricing from "./components/Pricing"
import Pricingfaq from "./components/Pricingfaq"
import Download from "./components/Download"
import Footer from "./components/Footer"
function App() {
  return (
  <div className=" overflow-x-hidden">
    <Navbar/>
    <Herosection/>
    <Calculator/>
    <Pricing/>
    <Pricingfaq/>
    <Download/>
    <Footer/>
  </div>
  )
}

export default App
