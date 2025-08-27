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
                            <div className="w-full h-[280px] sm:h-[320px] lg:h-[350px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-[1.02] flex items-center justify-center">
                                <div className="text-center text-gray-500">
                                    <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                                    <p className="text-sm font-medium">Konten akan ditambahkan</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="group">
                            <div className="w-full h-[280px] sm:h-[320px] lg:h-[350px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-[1.02] flex items-center justify-center">
                                <div className="text-center text-gray-500">
                                    <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                                    <p className="text-sm font-medium">Konten akan ditambahkan</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="group md:col-span-2 lg:col-span-1">
                            <div className="w-full h-[280px] sm:h-[320px] lg:h-[350px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group-hover:scale-[1.02] flex items-center justify-center">
                                <div className="text-center text-gray-500">
                                    <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
                                    <p className="text-sm font-medium">Konten akan ditambahkan</p>
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