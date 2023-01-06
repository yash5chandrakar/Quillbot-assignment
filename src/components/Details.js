import React, { useEffect, useState } from 'react'

const Details = () => {
    const [toggle, setToggle] = useState(false)
    const [filled1, setFilled1] = useState(0)
    const [filled2, setFilled2] = useState(0)
    const [filled3, setFilled3] = useState(0)

    const [text1, setText1] = useState(0)
    const [text2, setText2] = useState(0)
    const [text3, setText3] = useState(0)

    const [scaleNum, setScaleNum] = useState(0.6)



    // const obj = [75, 50, 85];

    useEffect(() => {
        let elements = document.getElementById("roundProgress")
        // let roundItems = document.getElementById("roundItem")

        function initialize() {
            setToggle(prev => !prev)
        }

        if (!toggle) {
            elements.addEventListener('mouseover', initialize)
            setToggle(prev => !prev)
        }

        return () => {
            elements.removeEventListener('mouseover', initialize)
        }
    }, [toggle])

    useEffect(() => {
        if (filled1 <= 270 && toggle) {
            setTimeout(() => setFilled1(prev1 => prev1 += 1), 20)
            let value1 = (filled1 / 270) * 75;
            if (value1 % 5 === 0) {
                setText1(value1.toFixed(0))
            }
        }
        if (filled2 <= 360 && toggle) {
            setTimeout(() => setFilled2(prev2 => prev2 += 1), 20)
            let value2 = (filled2 / 360) * 50;
            if (value2 % 5 === 0) {
                setText2(value2.toFixed(0))
            }
        }
        if (filled3 <= 306 && toggle) {
            setTimeout(() => setFilled3(prev3 => prev3 += 1), 20)
            let value3 = (filled3 / 306) * 85;
            if (value3 % 5 === 0) {
                setText3(value3.toFixed(0))
            }
        }

        if (scaleNum < 1) {
            setTimeout(() => setScaleNum(prev => prev += 0.01), 20)
        }

    }, [filled1, filled2, filled3, toggle, scaleNum])


    function handleRefresh() {
        setScaleNum(0.6)
        setFilled1(0)
        setFilled3(0)
        setFilled2(0)
        setText1(0)
        setText2(0)
        setText3(0)
    }

    return (
        <div className='detailOuterDiv' id='roundProgress'>
            <p className='premiumHeading'>Write better, faster, and clearer instantly</p>
            <p className='someText'>QuillBot is trusted by students, professionals writers, and business people who want to write more effectively.</p>
            <div className='roundProgress' style={{
                transform: `scale(${scaleNum})`
            }}>
                <div className='roundItem' >
                    <div className='circleDiv1' id='circle1' style={{
                        background: `conic-gradient(#499557 ${filled1}deg, lightgray 0deg`
                    }}>
                        <div className='percent1'><span className='bigValue'>{text1}% </span><span className='smallValue'>time saved</span></div>
                    </div>
                    <p className='someText'>Average time savings per writing project.</p>
                </div>
                <div className='roundItem'>
                    <div className='circleDiv2' id='circle2' style={{
                        background: `conic-gradient(#499557 ${filled2}deg, lightgray 0deg`
                    }}>
                        <div className='percent2'><span className='bigValue'>{text2}+</span><span className='smallValue'>million</span></div>
                    </div>
                    <p className='someText'>Trusted by millions worldwide.</p>
                </div>
                <div className='roundItem'>
                    <div className='circleDiv3' id='circle3' style={{
                        background: `conic-gradient(#499557 ${filled3}deg, lightgray 0deg`
                    }}>
                        <div className='percent3'><span className='bigValue'>{text3}%</span><span className='smallValue'>of students</span></div>
                    </div>
                    <p className='someText'>Who reported their grades improved after using QuillBot.</p>
                </div>
            </div>
            <div className='refreshIcon' onClick={() => handleRefresh()}>↻</div>
        </div>
    )
}

export default Details
