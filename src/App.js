import react from 'react'
import Breaking from './Component/Breaking'
import NavBar from './Component/NabBar'
import Trending from './Component/Trending'
function App() {
  return (
    <div className='App'>
      <NavBar />
      <Trending />
      <Breaking />
    </div>
  )
}

export default App
