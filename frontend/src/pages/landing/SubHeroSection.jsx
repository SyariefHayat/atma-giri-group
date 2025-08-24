import React from 'react'

const SubHeroSection = () => {
    return (
        <section aria-label="Sub Hero section" className="relative w-full min-h-screen flex items-center justify-center gap-14 bg-gray-100">
            <div className="absolute w-[80%] h-screen bg-[url('/sub-hero.png')] bg-cover bg-center bg-no-repeat rounded-lg bg-white -top-[100px] shadow-2xl"></div>
        </section>
    )
}

export default SubHeroSection