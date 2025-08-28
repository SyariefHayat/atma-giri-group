import React from 'react'

import EachUtils from '@/utils/EachUtils';
import { LIST_VALUE } from '@/constants/listValue';
import { Button } from '@/components/ui/button';

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
                    <div className="flex items-start sm:items-center justify-between mb-8 gap-4">
                        <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                        Nilai Kami
                        </h3>
                        <Button className="cursor-pointer bg-blue-600 hover:bg-blue-700">
                            Lihat lebih banyak
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <EachUtils
                            of={LIST_VALUE}
                            render={(item, index) => (
                                <div key={index} className="group">
                                    <div className="w-full h-[320px] lg:h-[360px] bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1 flex items-center justify-center p-8">
                                        <div className="text-center max-w-sm">
                                            <div className="w-16 h-16 bg-indigo-50 rounded-2xl mx-auto mb-5 flex items-center justify-center shadow-inner">
                                                <item.icon className="w-8 h-8 text-indigo-600" />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-800 mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-gray-600 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection