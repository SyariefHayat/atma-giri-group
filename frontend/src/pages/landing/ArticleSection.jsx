import React from 'react'

import EachUtils from '@/utils/EachUtils'
import { getInitial } from '@/utils/getInitial'
import { LIST_ARTICLE } from '@/constants/listArticle'

import { 
    Avatar, 
    AvatarFallback, 
    AvatarImage 
} from '@/components/ui/avatar'

const ArticleSection = () => {
    return (
        <section className="relative py-8 sm:py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-6 text-gray-900">Berita dan Cerita Kami</h2>
                    <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">Temukan kisah inspiratif dan kabar terbaru dari setiap langkah kami dalam mendukung kedaulatan pangan dan penddikan. Melalui berita dan cerita ini, Anda bisa melihat bagaimana kontribusi bersama membawa perubahan nyata bagi masyarakat.</p>
                </div>
                
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-300 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    <EachUtils
                        of={LIST_ARTICLE}
                        render={(item, index) => (
                            <article key={index} className="flex max-w-xl flex-col items-start justify-between">
                                <figure className="w-full h-full rounded-xl overflow-hidden mb-4">
                                    <img src={item.backgroundImage} alt={item.title} className="w-full h-full object-cover object-center" />
                                </figure>

                                <div>
                                    <h3 className="mt-3 text-lg/6 font-semibold">
                                        {item.title}
                                    </h3>
                                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">{item.description}</p>
                                </div>

                                <div className="relative mt-8 flex items-center gap-x-4">
                                    <Avatar className="size-10 bg-gray-50">
                                        <AvatarImage src="https://github.com/shadcn.png" />
                                        <AvatarFallback>{getInitial(item.author?.name)}</AvatarFallback>
                                    </Avatar>

                                    <div className="text-sm/6">
                                        <p className="relative font-semibold text-gray-900">
                                            <span>
                                                {item.author.name}
                                            </span>
                                        </p>
                                        <time dateTime={item.datetime} className="text-gray-500">
                                            {item.date}
                                        </time>
                                    </div>
                                </div>
                            </article>
                        )}
                    />
                </div>
            </div>
        </section>
    );
};

export default ArticleSection;