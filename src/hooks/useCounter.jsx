import { useState } from "react"

const useCounter = (date) => {
    const [day, setDay] = useState()
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [second, setSecond] = useState()

    const counter = () => {
        const futureDate = new Date(date).getTime()
        const now = new Date().getTime()
        const interval = futureDate - now
    
        const second = 1000
        const minute = second * 60
        const hour = minute * 60
        const day = hour * 24
    
        const intervalDay = Math.floor(interval / day)
        const intervalHour = Math.floor((interval % day) / hour)
        const intervalMinute = Math.floor((interval % hour) / minute)
        const intervalSecond = Math.floor((interval % minute) / second)
   
        setDay(intervalDay)
        setHour(intervalHour)
        setMinute(intervalMinute)
        setSecond(intervalSecond)
    }

    setInterval(counter, 1000)

    return([day, hour, minute, second])
}

export default useCounter