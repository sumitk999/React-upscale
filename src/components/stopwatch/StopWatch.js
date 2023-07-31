import React, { useEffect, useState } from 'react'

const StopWatch = () => {
    const [milSec, setMilSec] = useState(0)
    let [sec, setSec] = useState(0)
    const [min, setMin] = useState(0)
    const [start, setStart] = useState(false)
    const [reset, setReset] = useState(false)
    const [pause, setPause] = useState(false)
    const [intId, setIntId] = useState()
    useEffect(() => {
        let ms = 0
        let s = 0
        let m = 0
        if (start) {
            let letintId = setInterval(() => {
                setIntId(letintId)
                ms += 1;
                if (ms >= 100) {
                    ms = 0
                    s += 1
                    // setSec(s)
                    if (s < 10) {
                        setSec(`0${s}`)
                    } else {
                        setSec(s)
                    }
                    if (s >= 59) {
                        s = 0
                        m += 1
                        if (m < 10) {
                            setMin(`0${m}`)
                        } else {
                            setMin(m)
                        }
                    }
                }
                if (ms < 10) {
                    setMilSec(`00${ms}`)
                } else if (ms < 100) {
                    setMilSec(`0${ms}`)
                } else {
                    setMilSec(`${ms}`)
                }
            }, 10)
        } else if (pause) {
            console.log("paused");
            clearInterval(intId)
        } else if (reset) {

            clearInterval(intId)

            setMilSec(0)
            setSec(0)
            setMin(0)

        }
    }, [start, reset, pause])
    return (
        <div>
            <div><h1>{min ? min : "00"}:{sec ? sec : "00"}:{milSec ? milSec : "000"}</h1></div>
            <div>
                <div><button onClick={() => setStart(true)}>Start</button></div>
                <div><button onClick={() => { setStart(false); setPause(true) }}>Pause</button></div>
                <div><button onClick={() => { setStart(false); setPause(false); setReset(true) }}>Reset</button></div>
            </div>
        </div>
    )
}

export default StopWatch