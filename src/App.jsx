
import './App.css'
import Daisynav from './component/Daisynav/Daisynav'
import NavBar from './component/NavBar/NavBar'
import PriceOptions from './component/PriceOptions/PriceOptions'

function App() {

  return (
    <>
       <NavBar />
       <h1 className='text-7xl bg-rose-600'>Vite + React</h1>
       <PriceOptions />
      {/* <Daisynav /> */}
      
    </>
  )
}

export default App
