import Title from './components/Title'
import Count from './components/Count'
import BgImg from './assets/bg-img.jpg'
import useCounter from './hooks/useCounter'

import './App.css'

function App() {

  const [day, hour, minute, second] = useCounter("Jan 1, 2025 00:00:00")

  return (
    <div className='App' style={{ backgroundImage: `url(${BgImg})` }}>
        <div className="container">
          <Title title="Contagem regressiva para ano novo"/>
          <div className="countDown-container">
            <Count title="Dias" number={day}/>
            <Count title="Horas" number={hour}/>
            <Count title="Minutos" number={minute}/>
            <Count title="Segundos" number={second}/>
          </div>
        </div>
    </div>
  )
}

export default App
