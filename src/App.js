import react from 'react'
import Breaking from './Component/Breaking'
import NavBar from './Component/NabBar'
import Trending from './Component/Trending'
function App() {
  return (
    <body className='App'>
      <NavBar />
      <Trending />
      <Breaking />
    </body>
  )
}

export default App
