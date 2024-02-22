import Title from '../components/Title'
import Count from '../components/Count'
import './Contador.css'

function Contador({day,hour,minute,second}){
    return(
    <div className="container">
    <Title title="Contagem regressiva para ano novo"/>
        <div className="countDown-container">
            <Count title="Dias" number={day}/>
            <Count title="Horas" number={hour}/>
            <Count title="Minutos" number={minute}/>
            <Count title="Segundos" number={second}/>
        </div>
    </div>
    )
}

export default Contador