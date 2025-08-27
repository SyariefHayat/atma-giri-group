import React from 'react';

const HeroSection = () => {
    return (
        <section aria-label="Hero section" className="relative w-full h-screen flex items-center bg-[url('/hero.png')] bg-cover bg-center gap-14 text-white">
            <div className="inset-0 bg-black opacity-30 absolute"></div>
            <div className="relative mx-auto max-w-4xl sm:px-0 text-center mt-12">
                <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl leading-tight">
                    Kedaulatan Pangan, Pendidikan Berkualitas
                </h1>
                <p className="mt-8 text-lg font-medium sm:text-xl">
                    Giri Foundation hadir untuk memastikan setiap individu mendapat pangan sehat dan pendidikan inklusif. Melalui pertanian berkelanjutan, beasiswa, dan pemberdayaan masyarakat, kami membangun Indonesia yang mandiri dan sejahtera.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <a
                        href="/program/sosial"
                        className="rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    >
                        Donasi Sekarang
                    </a>
                    <a href="/article" className="text-sm font-semibold hover:text-blue-500">
                        Baca Blog <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;