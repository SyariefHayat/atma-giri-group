import React from 'react'

const AboutSection = () => {
    return (
        <section className="relative py-8 sm:py-16 rounded-t-[40px] -mt-10 bg-white">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-gray-900">
                        Tentang Kami
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Atma Giri Group adalah yayasan yang berkomitmen memperjuangkan kedaulatan pangan dan pendidikan berkualitas bagi seluruh lapisan masyarakat. Kami percaya bahwa setiap orang berhak mendapatkan pangan sehat serta akses pendidikan yang inklusif dan merata.
                    </p>
                </div>
                
                <div className="mt-16">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                            Nilai-Nilai Kami
                        </h3>
                        <button className="bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg">
                            Lihat lebih banyak
                        </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="group">
                            <div className="w-full h-[280px] sm:h-[320px] lg:h-[350px] bg-gradient-to-br from-green-100 to-green-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-[1.02] flex items-center justify-center p-6">
                                <div className="text-center text-green-700">
                                    <div className="w-16 h-16 bg-green-300 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                                        🌱
                                    </div>
                                    <p className="text-lg font-semibold mb-2">Kedaulatan Pangan Berbasis Komunitas</p>
                                    <p className="text-sm">Mendukung pertanian organik, agroforestri, dan konservasi benih lokal dengan melibatkan masyarakat agar tercipta ketahanan pangan berkelanjutan.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="w-full h-[280px] sm:h-[320px] lg:h-[350px] bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-[1.02] flex items-center justify-center p-6">
                                <div className="text-center text-blue-700">
                                    <div className="w-16 h-16 bg-blue-300 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                                        📚
                                    </div>
                                    <p className="text-lg font-semibold mb-2">Pendidikan untuk Semua</p>
                                    <p className="text-sm">Menyediakan akses pendidikan inklusif melalui beasiswa, bimbingan belajar, dan literasi bagi anak-anak, remaja, hingga masyarakat dewasa.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="group">
                            <div className="w-full h-[280px] sm:h-[320px] lg:h-[350px] bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-[1.02] flex items-center justify-center p-6">
                                <div className="text-center text-purple-700">
                                    <div className="w-16 h-16 bg-purple-300 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                                        🤝
                                    </div>
                                    <p className="text-lg font-semibold mb-2">Pelatihan & Pemberdayaan Masyarakat</p>
                                    <p className="text-sm">Menyelenggarakan workshop dan pelatihan keterampilan pertanian, teknologi, serta kewirausahaan untuk meningkatkan kemandirian masyarakat.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="group">
                            <div className="w-full h-[280px] sm:h-[320px] lg:h-[350px] bg-gradient-to-br from-orange-100 to-orange-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-[1.02] flex items-center justify-center p-6">
                                <div className="text-center text-orange-700">
                                    <div className="w-16 h-16 bg-orange-300 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                                        🔬
                                    </div>
                                    <p className="text-lg font-semibold mb-2">Pengembangan Teknologi Pangan</p>
                                    <p className="text-sm">Melakukan riset dan inovasi dalam teknologi pangan untuk meningkatkan produktivitas serta kualitas pangan lokal agar mampu bersaing secara global.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="w-full h-[280px] sm:h-[320px] lg:h-[350px] bg-gradient-to-br from-red-100 to-red-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-[1.02] flex items-center justify-center p-6">
                                <div className="text-center text-red-700">
                                    <div className="w-16 h-16 bg-red-300 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                                        👩‍🏫
                                    </div>
                                    <p className="text-lg font-semibold mb-2">Program Guru & Kurikulum</p>
                                    <p className="text-sm">Meningkatkan kualitas pendidikan melalui pelatihan pedagogi modern, pengembangan kurikulum berbasis lokal, serta penyediaan fasilitas belajar.</p>
                                </div>
                            </div>
                        </div>

                        <div className="group">
                            <div className="w-full h-[280px] sm:h-[320px] lg:h-[350px] bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-[1.02] flex items-center justify-center p-6">
                                <div className="text-center text-teal-700">
                                    <div className="w-16 h-16 bg-teal-300 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                                        💻
                                    </div>
                                    <p className="text-lg font-semibold mb-2">Digitalisasi & Literasi Teknologi</p>
                                    <p className="text-sm">Memperkenalkan teknologi pertanian modern, literasi digital, dan pengembangan konten edukasi digital untuk memperluas akses ilmu pengetahuan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection