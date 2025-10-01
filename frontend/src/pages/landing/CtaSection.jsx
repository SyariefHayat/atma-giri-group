import { Button } from '@/components/ui/button'
import React from 'react'

const CtaSection = () => {
    return (
        <section className="w-full h-full lg:h-screen bg-gray-100 relative px-4 lg:px-8 py-12 sm:py-16 flex flex-col md:flex-row items-center justify-between gap-8 text-white">
            <div className="w-full h-full flex flex-col justify-center space-y-6">
                <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-gray-900 leading-snug">Bergabung Bersama Kami</p>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">Setiap kontribusi dapat mengubah kehidupan dan membuka kesempatan baru. Bersama, kita wujudkan perubahan yang berkelanjutan bagi pangan dan pendidikan di indonesia.</p>
                <div className="flex gap-3">
                    <Button className="rounded-full bg-[#19A7CE]">Donasi</Button>
                    <Button className="rounded-full bg-[#19A7CE]">Terlibat Bersama</Button>
                </div>
            </div>

            <div className="w-full h-[300px] md:h-[500px] lg:h-full bg-[#19A7CE] rounded-2xl"></div>
        </section>
    )
}

export default CtaSection