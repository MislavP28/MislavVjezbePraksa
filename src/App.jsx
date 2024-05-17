import { Route, Routes } from 'react-router-dom'
import './App.css'
import { HomePage } from '../src/Pages/HomePage/HomePage'
import { ServerDetails } from '../src/Pages/ServerDetails/ServerDetails'
import { AppWrapper } from './Layout/AppWrapper/AppWrapper'
import { NoMatch } from './Pages/NoMatch/NoMatch'


function App() {
    return (
      <>
      <Routes>
        <Route path="/" element={<AppWrapper/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/:server/:id' element={<ServerDetails
            title="Server details"
            text="Below you can find a detalied list of informations regarding selected servers"
            />} />
            <Route path="*" element={<NoMatch/>} />
        </Route>
            <Route path="*" element={<NoMatch/>} />
      </Routes>
      </>
    )
}

export default App
