import React, { useRef } from 'react'

const ScrollViewRef = () => {
    const scrollRef = useRef(0)
    const ScrollToView = (index) => {
        const currentList = scrollRef.current

        const container = currentList.querySelectorAll('section > div')[index];
        container.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        })
    }
    return (
        <>
            <header>
                <nav className='fixed'>
                    <button onClick={() => ScrollToView(0)}>home</button>
                    <button onClick={() => ScrollToView(1)}>About us</button>
                    <button onClick={() => ScrollToView(2)}>Services</button>
                    <button onClick={() => ScrollToView(3)}>contact us</button>
                </nav>
            </header>

            <section ref={scrollRef}>
                <div className='h-150'>
                    home
                </div>

                <div className='h-150'>
                    About us
                </div>

                <div className='h-150'>
                    Services
                </div>

                <div className='h-150'>
                    Contact us
                </div>

            </section>
        </>
    )
}

export default ScrollViewRef