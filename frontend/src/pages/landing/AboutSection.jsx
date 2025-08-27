import React from 'react'
import SectionLayout from '@/components/layouts/SectionLayout'
import { Button } from '@/components/ui/button'

const AboutSection = () => {
    return (
        <SectionLayout label="About Section">
            <div className="space-y-8 lg:space-y-12">
                <div className="w-full flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-8 xl:gap-12">
                    <div className="w-full my-auto">
                        <h2 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                            Tentang Kami
                        </h2>
                        <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:leading-14 text-pretty text-gray-900 sm:text-3xl lg:text-4xl xl:text-5xl">
                            Atma Giri Group
                        </h1>
                        <div className="mt-3">
                            <p className="text-lg/8 text-gray-600">
                                Atma Giri Group adalah yayasan yang berkomitmen memperjuangkan kedaulatan pangan dan pendidikan berkualitas bagi seluruh lapisan masyarakat. Kami percaya bahwa setiap orang berhak mendapatkan pangan sehat serta akses pendidikan yang inklusif dan merata.
                            </p>
                            <p className="text-lg/8 text-gray-600">
                                Dengan semangat kolaborasi dan keberlanjutan, Atma Giri Group hadir untuk menciptakan perubahan positif yang nyata, demi mewujudkan Indonesia yang lebih kuat, cerdas, dan berdaya saing global.
                            </p>
                        </div>
                        <Button className="mt-5">Lihat lebih banyak</Button>
                    </div>
                    <div className="w-full h-screen bg-[url('/sub-hero.png')] bg-cover bg-center rounded-lg">
                    </div>
                </div>
            </div>
        </SectionLayout>
    )
}

export default AboutSection