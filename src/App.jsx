
import './App.css'
import Daisynav from './component/Daisynav/Daisynav'
import LineChart from './component/LineChart/LineChart'
import NavBar from './component/NavBar/NavBar'
import Phones from './component/Phones/Phones'
import PriceOptions from './component/PriceOptions/PriceOptions'

function App() {

  return (
    <>
       <NavBar />
       <h1 className='text-7xl bg-rose-600'>Vite + React</h1>
       <PriceOptions />
      <LineChart />
      <Phones></Phones>
      
    </>
  )
}

export default App
