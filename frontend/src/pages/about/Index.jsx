import React from 'react'

import Navbar from '../landing/Navbar'
import Footer from '../landing/Footer'
import EachUtils from '@/utils/EachUtils'
import { LIST_MISI } from '@/constants/listMisi'
import FlexLayout from '@/components/layouts/FlexLayout'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import TeamSection from '@/components/modules/about/TeamSection'

const About = () => {
    return (
        <DefaultLayout>
            <Navbar />
            <section className="relative w-full h-[500px] flex items-center justify-center bg-[url(/toge.jpg)] bg-cover bg-center text-white">
                <div className="absolute inset-0 bg-black/50 z-0"></div>
                <div className="relative mx-auto max-w-3xl mt-20 px-3 sm:px-0 text-center">
                    <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">Atma Giri Group</h1>
                    <p className="mt-8 text-lg font-medium sm:text-xl">Kami adalah komunitas yang bergerak dalam bidang sosial dan edukasi, siap memberikan kontribusi nyata bagi masa depan yang inklusif dan berkelanjutan.</p>
                </div>
            </section>

            <FlexLayout image="founder.jpg">
                <h2 className="text-base/7 font-semibold text-blue-600">Langkah Awal</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Tentang Kami</p>
                <p className="mt-6 text-lg/8 text-gray-600">
                    Dengan menggabungkan pendekatan berbasis hak atas pangan dan pendidikan, yayasan ini bertujuan untuk menciptakan perubahan yang berkelanjutan dan berdampak bagi masyarakat luas. Kami percaya bahwa dengan memperkuat kedaulatan pangan dan memastikan akses pendidikan yang inklusif, kita dapat mencapai kesejahteraan yang merata dan mengurangi kesenjangan sosial di masyarakat.
                </p>
            </FlexLayout>

            <FlexLayout isClip={true} isReverse={true} image="manager1.jpg">
                <h2 className="text-base/7 font-semibold text-blue-600">Arah dan Tujuan</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Visi Kami</p>
                <p className="mt-6 text-lg/8 text-gray-600">
                    Melalui kolaborasi dengan berbagai pihak, termasuk pemerintah, organisasi non pemerintah, akademisi, dan komunitas lokal, kami berkomitmen untuk mewujudkan visi kami: sebuah dunia di mana setiap orang memiliki hak dan kemampuan untuk hidup secara bermartabat dengan akses terhadap pangan yang sehat dan pendidikan yang berkualitas.
                </p>
                <p className="mt-6 text-lg/8 text-gray-600">
                    Menjadi yayasan terdepan dalam memperjuangkan kedaulatan pangan dan meningkatkan kualitas pendidikan di indonesia. demi terciptanya masyarakat yang mandiri, sejahtera, dan berdaya saing global.
                </p>
            </FlexLayout>

            <FlexLayout image="impact.png">
                <h2 className="text-base/7 font-semibold text-indigo-600">Nilai dan Tindakan</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">Misi Kami</p>
                <ol className="list-decimal pl-4 text-gray-600 text-lg/8">
                    <EachUtils
                        of={LIST_MISI}
                        render={(item, index) => (
                            <li key={index} className="mt-6">
                                {item.content}
                            </li>
                        )}
                    />
                </ol>
            </FlexLayout>

            <TeamSection />
            <Footer/>
        </DefaultLayout>
    )
}

export default About