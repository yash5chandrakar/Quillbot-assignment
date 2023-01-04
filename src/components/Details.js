import React from 'react'

const Details = () => {
    return (
        <div className='detailOuterDiv'>
            <p className='premiumHeading'>Write better, faster, and clearer instantly</p>
            <p className='someText'>QuillBot is trusted by students, professionals writers, and business people who want to write more effectively.</p>
            <div className='roundProgress'>
                <div className='roundItem'>
                    <div className='circleDiv1'>
                        <div className='percent1'><span className='bigValue'>75% </span><span className='smallValue'>time saved</span></div>
                    </div>
                    <p className='someText'>Average time savings per writing project.</p>
                </div>
                <div className='roundItem'>
                    <div className='circleDiv2'>
                        <div className='percent2'><span className='bigValue'>50+</span><span className='smallValue'>million</span></div>
                    </div>
                    <p className='someText'>Trusted by millions worldwide.</p>
                </div>
                <div className='roundItem'>
                    <div className='circleDiv3'>
                        <div className='percent3'><span className='bigValue'>85%</span><span className='smallValue'>of students</span></div>
                    </div>
                    <p className='someText'>Who reported their grades improved after using QuillBot.</p>
                </div>
            </div>
        </div>
    )
}

export default Details
