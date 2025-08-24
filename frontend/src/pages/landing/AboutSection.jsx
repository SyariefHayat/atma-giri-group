import React from 'react'
import SectionLayout from '@/components/layouts/SectionLayout'

const AboutSection = () => {
    return (
        <SectionLayout label="About Section">
            <div className="space-y-8 lg:space-y-12">
                <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8 xl:gap-12">
                    <div className="w-full lg:w-[40%] xl:w-[35%]">
                        <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                            Tentang Kami
                        </h2>
                        <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:leading-14 text-pretty text-gray-900 sm:text-3xl lg:text-4xl xl:text-5xl">
                            Yayasan Atma Giri Group
                        </h1>
                    </div>
                    <div className="w-full lg:w-[60%] xl:w-[65%]">
                        <p className="text-lg/8 text-gray-600">
                            Giri Foundation adalah yayasan yang berkomitmen memperjuangkan kedaulatan pangan dan pendidikan berkualitas bagi seluruh lapisan masyarakat. Kami percaya bahwa setiap orang berhak mendapatkan pangan sehat serta akses pendidikan yang inklusif dan merata.
                        </p>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            Melalui program pertanian berkelanjutan, beasiswa, pelatihan keterampilan, hingga pemberdayaan komunitas lokal, kami berupaya menciptakan perubahan nyata yang berdampak jangka panjang.
                        </p>
                        <p className="mt-6 text-lg/8 text-gray-600">
                            Untuk mewujudkan misi ini, kami membuka ruang kolaborasi melalui crowdfunding dan fundraising. Setiap kontribusi yang Anda berikan bukan sekadar donasi, tetapi investasi untuk masa depan bangsa—membantu petani lokal, mendukung anak-anak agar tetap bersekolah, dan memperkuat kemandirian masyarakat.
                        </p>
                    </div>
                </div>
                
                <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 xl:h-[550px] 2xl:h-[500px] overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl shadow-md lg:shadow-lg">
                    <div className="absolute inset-0 bg-[url(/sub-hero.png)] bg-cover bg-center bg-no-repeat" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
            </div>
        </SectionLayout>
    )
}

export default AboutSection