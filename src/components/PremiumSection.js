import React from 'react'
import ToolTipComponent from './ToolTipComponent'

const PremiumSection = () => {

    const objects = [
        {
            "id": 1,
            "title": "Unlimited words in the Paraphraser",
            "title-info-heading": "Write Faster",
            "info-heading-body": "You’ll complete your work up to 75% faster with QuillBot."
        },
        {
            "id": 2,
            "title": "Standard, Fluency, Expand, Shorten, Formal, Simple, and Creative modes",
            "title-info-heading": "Explore Multiple Styles",
            "info-heading-body": "There's a mode for every occasion, whether formal or casual."
        },
        {
            "id": 3,
            "title": "4 synonym options",
            "title-info-heading": "Add More Synonyms",
            "info-heading-body": "Full use of the Synonym Slider can increase the uniqueness of your text."
        },
        {
            "id": 4,
            "title": "Unlimited Freeze words and phrases",
            "title-info-heading": "Prevent Words From Changing",
            "info-heading-body": "Industry-specific terms (technical, scientific, medical, etc.) won't get changed during paraphrasing."
        },
        {
            "id": 5,
            "title": "6000 words in the Summarizer",
            "title-info-heading": "Find The Key Points",
            "info-heading-body": "Research time is greatly reduced when articles are trimmed to their main points."
        },
        {
            "id": 6,
            "title": "Faster processing speed",
            "title-info-heading": "Enjoy Increased Paraphrasing Speed",
            "info-heading-body": "Fifteen sentences are paraphrased at once instead of only two sentences with a free account."
        },
        {
            "id": 7,
            "title": "Advanced grammar rewrites",
            "title-info-heading": "Get Immediate Recommendations",
            "info-heading-body": "Rewritten sentences are suggested for text that is too complicated or doesn't flow well."
        },
        {
            "id": 8,
            "title": "Compare Modes (Desktop only)",
            "title-info-heading": "Choose The Best Rewrite",
            "info-heading-body": "You'll be able to compare outputs from multiple modes."
        },
        {
            "id": 9,
            "title": "Plagiarism Checker*",
            "title-info-heading": "Detect Plagiarism",
            "info-heading-body": "You can avoid accidental plagiarism by ensuring all outside sources are properly cited."
        },
        {
            "id": 10,
            "title": "Tone detection",
            "title-info-heading": "Communicative Insights",
            "info-heading-body": "Understand how text can impact every audience"
        }
    ]

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
                    {/* <p className='paraItems'>✔️ Unlimited words in the Paraphraser<span>🛈</span></p> */}
                    <p className='paraItems'>✔️ Unlimited words in the Paraphraser
                        <ToolTipComponent heading={objects[0]['title-info-heading']} body={objects[0]['info-heading-body']} />
                    </p>

                    <p className='paraItems'>✔️ Standard, Fluency, Expand, Shorted, Formal, Simple, and Creative modes <ToolTipComponent heading={objects[1]['title-info-heading']} body={objects[1]['info-heading-body']} /> </p>
                    <p className='paraItems'>✔️ 4 synonym options <ToolTipComponent heading={objects[2]['title-info-heading']} body={objects[2]['info-heading-body']} /></p>
                    <p className='paraItems'>✔️ Unlimited Freeze workds and phrases <ToolTipComponent heading={objects[3]['title-info-heading']} body={objects[3]['info-heading-body']} /> </p>
                    <p className='paraItems'>✔️ 6000 words in the summarizer <ToolTipComponent heading={objects[4]['title-info-heading']} body={objects[4]['info-heading-body']} /> </p>
                    <p className='paraItems'>✔️ Faster processing speed <ToolTipComponent heading={objects[5]['title-info-heading']} body={objects[5]['info-heading-body']} /> </p>
                    <p className='paraItems'>✔️ Advanced grammar rewrites <ToolTipComponent heading={objects[6]['title-info-heading']} body={objects[6]['info-heading-body']} /> </p>
                    <p className='paraItems'>✔️ Compare Modes (Desktop Only) <ToolTipComponent heading={objects[7]['title-info-heading']} body={objects[7]['info-heading-body']} /> </p>
                    <p className='paraItems'>✔️ Plagiarism Checker* <ToolTipComponent heading={objects[8]['title-info-heading']} body={objects[8]['info-heading-body']} /> </p>
                    <p className='paraItems'>✔️ Tone Detection <ToolTipComponent heading={objects[9]['title-info-heading']} body={objects[9]['info-heading-body']} /> </p>
                    <p className='lastItem'>3-Day Money-Back Guarantee</p>
                </div>
            </div>
            <p className='someText'>*Scan up to 20 pages a month</p>
        </div>
    )
}

export default PremiumSection
