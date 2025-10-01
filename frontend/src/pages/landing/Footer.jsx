import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-repeat" 
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}>
                </div>
            </div>

            <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 items-center mb-12">
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-3 mb-6 lg:-ml-2 ">
                            <img src="/Group 4.png" alt="SIJUKI Logo" className="h-[80px] md:h-56 w-auto" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center lg:justify-end">
                        <p className="text-blue-100 mb-8 leading-relaxed text-lg max-w-2xl">
                            Memberi dengan mudah, berbagi dengan aman, dan membangun harapan bersama.
                        </p>
                        <div className="flex space-x-4">
                            <a href="https://www.instagram.com/yayasanatmagirigroup" className="group w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white hover:text-red-500 transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-2.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Z"/>
                                </svg>
                            </a>

                            <a href="https://www.facebook.com/YayasanAtmaGiriGroup" className="group w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white hover:text-[#19A7CE] transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.675 0H1.325C.594 0 0 .593 0 1.326v21.348C0 23.406.594 24 1.325 24H12.82V14.708h-3.11V11.08h3.11V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.143v3.24l-1.918.001c-1.504 0-1.795.716-1.795 1.763v2.308h3.587l-.467 3.629h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0"/>
                                </svg>
                            </a>

                            <a href="https://x.com/" className="group w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white hover:text-[#333] transition-all duration-300 transform hover:scale-110 hover:shadow-lg">
                                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.964 6.817H1.68l7.73-8.836L1.26 2.25h6.63l4.713 6.211 5.641-6.211Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z"/>
                                </svg>
                            </a>

                            <a 
                                href="https://youtube.com" 
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white hover:text-[#FF0000] transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                            >
                                <svg 
                                    className="w-6 h-6 transition-transform group-hover:scale-110" 
                                    fill="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M23.498 6.186a2.974 2.974 0 0 0-2.093-2.107C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.405.579A2.974 2.974 0 0 0 .502 6.186 31.407 31.407 0 0 0 0 12a31.407 31.407 0 0 0 .502 5.814 2.974 2.974 0 0 0 2.093 2.107C4.495 20.5 12 20.5 12 20.5s7.505 0 9.405-.579a2.974 2.974 0 0 0 2.093-2.107A31.407 31.407 0 0 0 24 12a31.407 31.407 0 0 0-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t flex items-center justify-between border-white/30 pt-8">
                    <div className="text-blue-100 text-sm flex items-center">
                        <p className="flex items-center">
                            © 2025 YAYASAN ATMA GIRI GROUP. Semua hak dilindungi.
                        </p>
                    </div>
                    <a href="https://wa.me/6282258874949" target="_blank" className="text-blue-100 text-sm hover:underline">
                        0822-5887-4949
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;