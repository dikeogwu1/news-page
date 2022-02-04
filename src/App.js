import react from 'react'
import Breaking from './Component/Breaking'
import Footer from './Component/Footer'
import NavBar from './Component/NabBar'
import Trending from './Component/Trending'
function App() {
  return (
    <div className='app'>
      <NavBar />
      <Trending />
      <Breaking />
      <Footer />
    </div>
  )
}

export default App
