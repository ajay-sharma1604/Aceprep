import Navbar from "./Main/Navbar"
import Main1 from "./Main/Main1"
import Main2 from "./Main/Main2"
import Footer from "./Main/Footer"


function Main() {
  return (

    <div className='scroll-smooth'>
      <div className="bg-gradient-to-r from-gray-100 to-gray-300">
      {/* Your content goes here */}
      <Navbar />
      <Main1 />
      <Main2 />
      <Footer />
      </div>
    </div>

  )
}

export default Main