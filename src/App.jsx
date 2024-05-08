import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './components/HomePage'
import ServerDetails from './components/detaljiservera'


function App() {
    return (
      <>
      <Routes>
        <Route path="/" element={<Outlet/>}>
          <Route index element={<Homepage/>}/>
          <Route path='/:server/:id' element={<ServerDetails />} />

        </Route>
      </Routes>
      </>
    )
}

export default App
