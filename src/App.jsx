import { Outlet, Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from '../src/Pages/HomePage/HomePage'
import { ServerDetails } from '../src/Pages/ServerDetails/ServerDetails'


function App() {
    return (
      <>
      <Routes>
        <Route path="/" element={<Outlet/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/:server/:id' element={<ServerDetails />} />

        </Route>
      </Routes>
      </>
    )
}

export default App
