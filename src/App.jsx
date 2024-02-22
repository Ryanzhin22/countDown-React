import BgImg from './assets/bg-img.jpg'
import useCounter from './hooks/useCounter'
import Contador from './pages/Contador'
import Formulario from './pages/Formulario';
import { BrowserRouter , Routes, Route, Form } from "react-router-dom";

import './App.css'

function App() {

  const [day, hour, minute, second] = useCounter("Jan 1, 2025 00:00:00")

  return (
    <div className='App' style={{ backgroundImage: `url(${BgImg})` }}>
        <BrowserRouter>
          <Routes>
            <Route path="/counter" element={<Contador day={day} hour={hour} minute={minute} second={second}/>}/>
            <Route path='/' element={<Formulario/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
