import { Button } from '@/components/ui/button';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section aria-label="Hero section" className="relative w-full h-screen flex items-center bg-[url('/hero.png')] bg-cover bg-center gap-14 text-white">
            <div className="inset-0 bg-black opacity-30 absolute" />
            <div className="relative mx-auto max-w-4xl sm:px-0 text-center">
                <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl leading-tight">
                    Kedaulatan Pangan, Pendidikan Berkualitas
                </h1>
                <p className="mt-8 text-lg font-medium sm:text-xl">
                    Giri Foundation hadir untuk memastikan setiap individu mendapat pangan sehat dan pendidikan inklusif. Melalui pertanian berkelanjutan, beasiswa, dan pemberdayaan masyarakat, kami membangun Indonesia yang mandiri dan sejahtera.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Button onClick={() => navigate("/program/sosial")} className="cursor-pointer bg-blue-600 hover:bg-blue-400">
                        Donasi Sekarang
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;