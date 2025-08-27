import React from 'react'

const ImpactSection = () => {
    return (
        <section className="relative">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative w-full h-[70vh] sm:h-[80vh] lg:h-screen bg-[url('/img.jpg')] bg-cover bg-center rounded-xl overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-black/50" />

                    <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-12">
                        <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 text-white drop-shadow-lg">
                        Dampak Kami
                        </h2>
                        <p className="text-base sm:text-lg lg:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
                        Sejak berdiri, Yayasan Atma Giri Group telah menghadirkan berbagai
                        program yang memberikan perubahan nyata bagi masyarakat. Dari
                        mendukung petani lokal meningkatkan hasil panen, hingga membantu
                        anak-anak kurang mampu memperoleh pendidikan, setiap langkah kecil
                        yang kami lakukan membawa dampak besar bagi masa depan.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImpactSection