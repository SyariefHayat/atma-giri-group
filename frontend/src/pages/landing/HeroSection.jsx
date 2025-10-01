import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
    const backgroundsDesktop = ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg"];
    const backgroundsMobile = ["/slide1.jpg", "/slide2.jpg", "/slide3.jpg"];

    const [current, setCurrent] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    const slideDuration = 5000;
    const transitionDuration = 1500;

    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 768);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    const backgrounds = isMobile ? backgroundsMobile : backgroundsDesktop;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % backgrounds.length);
        }, slideDuration);
        return () => clearInterval(interval);
    }, [backgrounds.length, slideDuration]); 

    return (
        <section
            aria-label="Hero section"
            className="relative w-full h-[650px] flex items-center text-white overflow-hidden"
        >
            {backgrounds.map((bg, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity ease-in-out ${index === current ? "opacity-100" : "opacity-0"}`}
                    style={{
                        backgroundImage: `url(${bg})`,
                        transitionDuration: `${transitionDuration}ms`,
                    }}
                />
            ))}

            <div className="absolute w-1/2 h-full left-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-10" />
            <div className="absolute w-full h-60 top-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent z-10" />

            <div className="relative mt-20 px-4 lg:px-20 z-20">
                <h1 className="max-w-60 sm:max-w-xl text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">MuliaEdu Fund</h1>
                <p className="max-w-60 sm:max-w-xl mt-5 text-2xl sm:text-3xl">Crowdfunding pendidikan dengan nilai kemuliaan.</p>
                <a href="/sign-up">
                    <Button className="mt-8 rounded-sm text-base py-6 bg-[#19A7CE] cursor-pointer hover:bg-[#1389a6] transition">Bergabung Sekarang</Button>
                </a>
            </div>
        </section>
    );
};

export default HeroSection;