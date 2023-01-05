import React, { useEffect, useState } from 'react'

const AdvantageSection = () => {

    const [selected, setSelected] = useState(0)
    const [filled, setFilled] = useState(0)

    const images = [
        {
            id: 1,
            url: "https://assets.quillbot.com/images/theme/light/premiumPage/newAvailableWord.svg",
        },
        {
            id: 2,
            url: "https://assets.quillbot.com/images/theme/light/premiumPage/synonym.svg",
        },
        {
            id: 3,
            url: "https://assets.quillbot.com/images/theme/commonImages/plagiarismChecker/plag-premium.svg",
        },
        {
            id: 4,
            url: "https://assets.quillbot.com/images/theme/commonImages/premiumPage/comparisonTable.svg",
        },
    ]

    function handleItemSelection(itemNumber) {
        setFilled(0)
        setSelected(itemNumber)
        let elements = document.getElementsByClassName("itemHeading")
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove("selectedItem")
        }
        elements[itemNumber].classList.add("selectedItem")
    }

    let timeoutId;

    useEffect(() => {
        if (filled < 100) {
            clearTimeout(timeoutId)
            // eslint-disable-next-line react-hooks/exhaustive-deps
            timeoutId = setTimeout(() => setFilled(prev => prev += 0.6), 30)
        }
        else {
            setFilled(0)
            setSelected(prev => {
                if (prev === 3) {
                    handleItemSelection(0)
                    return 0;
                }
                else {
                    handleItemSelection(prev + 1)
                    return prev += 1
                }
            })

        }

        let progressElement = document.getElementsByClassName("progress")

        for (let i = 0; i < progressElement.length; i++) {
            if (i === selected) {
                progressElement[i].style.width = `${filled}%`
            }
            else {
                progressElement[i].style.width = "0%"
            }
        }

        // console.log(filled)
    }, [filled, selected])


    // console.log("render")    

    return (
        <div className='advantageOuterDiv'>
            <div className='advantageInner'>
                <div className='leftSection'>
                    <div className='imageDiv'>
                        <img src={images[selected].url} alt='Slide.jpg'></img>
                    </div>
                </div>
                <div className='rightSection'>
                    <div className='rightItem' onClick={() => handleItemSelection(0)}>
                        <p className='itemHeading selectedItem'>Increase your Productivity</p>
                        <p className='itemDescription'>Paraphrase more text at once to finish writing faster.</p>
                        <div className='progressBar'>
                            <div className='progress'></div>
                        </div>
                    </div>
                    <div className='rightItem' onClick={() => handleItemSelection(1)}>
                        <p className='itemHeading'>Access all modes</p>
                        <p className='itemDescription'>Get maximum control over how you paraphrase.</p>
                        <div className='progressBar'>
                            <div className='progress'></div>
                        </div>
                    </div>
                    <div className='rightItem' onClick={() => handleItemSelection(2)}>
                        <p className='itemHeading'>Scan for plagiarism</p>
                        <p className='itemDescription'>Unlock the Plagiarism Checker to guarantee all sources are cited and nothing is unintentionally plagiarized.</p>
                        <div className='progressBar'>
                            <div className='progress'></div>
                        </div>
                    </div>
                    <div className='rightItem' onClick={() => handleItemSelection(3)}>
                        <p className='itemHeading'>Compare all mode outputs at once</p>
                        <p className='itemDescription'>Paraphrase in and compare outputs from all seven modes.</p>
                        <div className='progressBar'>
                            <div className='progress'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvantageSection
