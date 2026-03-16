'use client'

import { Span } from "next/dist/trace"
import Countdown,{CountdownRenderProps} from "react-countdown"

const endDate=Date.now() + 1000 * 60 * 60 * 24*3
const CountDown = () => {
    return (
        <Countdown
        date={endDate}
        renderer={({days,hours,minutes,seconds}:CountdownRenderProps)=>(
            <span className="text-amber-200 text-2xl md:text-5xl font-bold">
                {days}d : {hours}h : {minutes}m : {seconds}s 

            </span>
        )}
        
        />
    )

}

export default CountDown
