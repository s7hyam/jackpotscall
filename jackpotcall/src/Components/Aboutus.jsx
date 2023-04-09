import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import PageMaker from './PageMaker';

function Aboutus() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <PageMaker
            pageTitle={'ABOUT JACKPOTSCALL'}
            heading={'About JACKPOTSCALL'}
            paragraphs={[
                'JACKPOTSCALL is into advisory from last many years, we at JACKPOTSCALL believe in giving quality research calls to our clients, we provide proper technical calls to our clients and helps them in building wealth and increasing their capital. We have a proper dedicated research team. Our analysts have vast experience of generating profitable calls for our clients.',
                'We at JACKPOTSCALL also believes in teaching our clients new ways and methods to invest in Indian stock market. We provide study materials for technical research, we provide teaching classes via webinar every month, so that our clients learn the techniques that helps them in there trading, we provide daily track sheet on our website along with details of calls given for that particular day. We send daily newsletter to our clients which helps them in understanding the market for that particular day.'
            ]} />
    )
}

export default Aboutus
