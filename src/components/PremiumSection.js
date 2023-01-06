import React from 'react'

const PremiumSection = () => {
    return (
        <div className='premiumOuterDiv'>
            <p className='premiumHeading'>Experience the Full Power of QuillBot</p>
            <div className='premiumTable'>
                <div className='freeSection'>
                    <p className='freeHead'>FREE</p>
                    <div className='btnDiv'><button>Sign Up - Its free</button></div>
                    <p className='paraItems'>✔️ 125 words in the Paraphraser</p>
                    <p className='paraItems'>✔️ Standard and Fluency modes</p>
                    <p className='paraItems'>✔️ 3 synonym options</p>
                    <p className='paraItems'>✔️ 1 Freeze word or phrase</p>
                    <p className='paraItems'>✔️ 1200 words in the Summarizer</p>
                    <p className='paraItems'>❌ Faster processing speed</p>
                    <p className='paraItems'>❌ Advanced grammar rewrites</p>
                    <p className='paraItems'>❌ Compare Modes (Desktop Only)</p>
                    <p className='paraItems'>❌ Plagiarism Checker*</p>
                    <p className='paraItems'>❌ Tone detecion</p>
                    <p className='lastItem'>No Credit Card Required</p>
                </div>
                <div className='premSection'>
                    <p className='premHead'>💎  PREMIUM</p>
                    <div className='btnDivPrem'><button>Upgrade to Premium</button></div>
                    <p className='paraItems'>✔️ Unlimited words in the Paraphraser<span>🛈</span> </p>
                    <p className='paraItems'>✔️ Standard, Fluency, Expand, Shorted, Formal, Simple, and Creative modes <span>🛈</span> </p>
                    <p className='paraItems'>✔️ 4 synonym options <span>🛈</span> </p>
                    <p className='paraItems'>✔️ Unlimited Freeze workds and phrases <span>🛈</span> </p>
                    <p className='paraItems'>✔️ 6000 words in the summarizer <span>🛈</span> </p>
                    <p className='paraItems'>✔️ Faster processing speed <span>🛈</span> </p>
                    <p className='paraItems'>✔️ Advanced grammar rewrites <span>🛈</span> </p>
                    <p className='paraItems'>✔️ Compare Modes (Desktop Only) <span>🛈</span> </p>
                    <p className='paraItems'>✔️ Plagiarism Checker* <span>🛈</span> </p>
                    <p className='paraItems'>✔️ Tone Detection <span>🛈</span> </p>
                    <p className='lastItem'>3-Day Money-Back Guarantee</p>
                </div>
            </div>
            <p className='someText'>*Scan up to 20 pages a month</p>
        </div>
    )
}

export default PremiumSection
