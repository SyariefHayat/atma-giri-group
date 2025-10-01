import React from "react";

import EachUtils from "@/utils/EachUtils";
import { Button } from "@/components/ui/button";
import { LIST_VALUE } from "@/constants/listValue";
import SectionLayout from "@/components/layouts/SectionLayout";

const AboutSection = () => {
    return (
        <SectionLayout label="About Section">
            <div className="flex flex-col lg:flex-row gap-8 h-full">
                <div className="w-full lg:w-1/2 flex flex-col justify-between">
                    <div className="flex-1">
                        <h2 className="text-sm font-semibold tracking-wide text-[#19A7CE]">Tentang Kami</h2>
                        <p className="mt-3 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-gray-900 leading-snug">
                            Membangun Masa Depan Berkelanjutan Melalui Pangan dan Pendidikan
                        </p>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        <a href="/about-us">
                            <Button className="rounded-full w-fit px-6 py-2 border border-[#19A7CE] bg-transparent text-[#19A7CE] hover:bg-[#19A7CE] hover:text-white transition cursor-pointer">
                                Lihat lebih detail
                            </Button>
                        </a>
                    </div>
                </div>
                
                <div className="w-full lg:w-1/2 flex flex-col justify-center lg:justify-between">
                    <div className="space-y-6 lg:space-y-8">
                        <EachUtils
                            of={LIST_VALUE}
                            render={(item, index) => (
                                <div
                                    key={index}
                                    className="py-2 rounded-xl transition"
                                >
                                    <h4 className="text-lg sm:text-xl font-semibold text-gray-800">
                                        {item.title}
                                    </h4>
                                    <p className="mt-2 text-gray-600 text-sm sm:text-base leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            )}
                        />
                    </div>
                </div>
            </div>
        </SectionLayout>
    );
};

export default AboutSection;