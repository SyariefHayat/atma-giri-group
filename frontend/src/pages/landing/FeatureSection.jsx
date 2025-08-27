import React from 'react'

const FeatureSection = () => {
    return (
        <section className="relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="w-full h-screen flex bg-gray-300 rounded-md overflow-hidden">
                    <div className="w-full h-full bg-[url('/impact.png')] bg-cover bg-center"></div>
                    <div className="w-full h-full p-6 lg:p-10 overflow-y-auto">
                        <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-gray-900 mb-6">
                        Apa Yang Kami Lakukan
                        </h2>
                        
                        <ul className="space-y-6">
                            <li className="border-b pb-4">
                                <h3 className="text-xl lg:text-2xl font-semibold text-gray-800">
                                Kedaulatan Pangan
                                </h3>
                                <p className="text-base lg:text-lg text-gray-600 mt-2">
                                Mendukung pertanian organik, dan konservasi benih lokal dengan
                                melibatkan masyarakat agar tercipta ketahanan pangan yang
                                berkelanjutan.
                                </p>
                            </li>
                        
                            <li className="border-b pb-4">
                                <h3 className="text-xl lg:text-2xl font-semibold text-gray-800">
                                Pendidikan Inklusif
                                </h3>
                                <p className="text-base lg:text-lg text-gray-600 mt-2">
                                Menyediakan akses pendidikan inklusif melalui beasiswa, bimbingan
                                belajar, dan literasi bagi anak-anak, remaja, hingga masyarakat
                                dewasa.
                                </p>
                            </li>

                            {/* <li className="border-b pb-4">
                                <h3 className="text-xl lg:text-2xl font-semibold text-gray-800">
                                    Pemberdayaan Masyarakat
                                </h3>
                                <p className="text-base lg:text-lg text-gray-600 mt-2">
                                    Menyelenggarakan workshop dan pelatihan keterampilan pertanian,
                                    teknologi, serta kewirausahaan untuk meningkatkan kemandirian
                                    masyarakat.
                                </p>
                            </li> */}
                            
                            {/* <li>
                                <h3 className="text-xl lg:text-2xl font-semibold text-gray-800">
                                Inovasi & Teknologi
                                </h3>
                                <p className="text-base lg:text-lg text-gray-600 mt-2">
                                Melakukan riset dan inovasi dalam teknologi pangan untuk meningkatkan
                                produktivitas serta kualitas pangan lokal agar mampu bersaing secara
                                global.
                                </p>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeatureSection