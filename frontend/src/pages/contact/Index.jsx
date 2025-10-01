import React from 'react'

import Navbar from '../landing/Navbar'
import Footer from '../landing/Footer'
import DefaultLayout from '@/components/layouts/DefaultLayout'
import ContactForm from '@/components/modules/contact/ContactForm'

import { MessageCircle, Phone, Mail, Send, MapPin, Clock } from 'lucide-react'

const CONTACT = {
    WHATSAPP_NUMBER: '6281234567890',
    PHONE_NUMBER: '+62 812-3456-7890',
    EMAIL: 'halo@epadi.id',
    TELEGRAM_USERNAME: 'epadi_support',
    ADDRESS: 'Alang Alang, Karangbinangun, Kec. Karangbinangun, Kabupaten Lamongan, Jawa Timur 62293',
    HOURS: 'Senin–Jumat, 09.00–17.00 WIB',
}

const Contact = () => {
    const telLink = `tel:${CONTACT.PHONE_NUMBER.replace(/\s|-/g, '')}`

    return (
        <DefaultLayout>
            <Navbar />

            {/* HERO */}
            <div className="relative w-full h-[500px] flex items-center justify-center bg-[url(/8.webp)] bg-cover bg-center text-white">
                <div className="absolute inset-0 bg-black/50 z-0"></div>
                <div className="relative mx-auto max-w-3xl mt-20 px-3 sm:px-0 text-center">
                    <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">Hubungi Kami</h1>
                    <p className="mt-8 text-lg font-medium sm:text-xl">
                        Kami percaya bahwa setiap kontribusi, besar atau kecil, dapat membawa perubahan positif.
                        Jangan ragu untuk menghubungi kami.
                    </p>
                </div>
            </div>

            <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
                <div className="mb-10 text-center">
                    <h2 className="text-3xl font-semibold">Kanal Kami</h2>
                    <p className="mt-3 text-muted-foreground">
                        Pilih kanal yang paling nyaman untukmu—kami siap membantu.
                    </p>
                </div>

                <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-6">
                    <a
                        href="https://wa.me/6282258874949" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group rounded-2xl border bg-white shadow-sm hover:shadow-lg transition-all p-5 flex items-start gap-4 col-span-2"
                    >
                        <div className="p-3 rounded-xl bg-green-50 group-hover:scale-105 transition">
                            <MessageCircle className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">WhatsApp</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                Balasan cepat melalui chat.
                            </p>
                            <div className="mt-3 inline-flex items-center gap-2 text-green-700 font-medium">
                                Chat sekarang
                                <span className="group-hover:translate-x-0.5 transition">→</span>
                            </div>
                        </div>
                    </a>

                    <a
                        href="mailto:admin@atmagirigroup.id"
                        className="group rounded-2xl border bg-white shadow-sm hover:shadow-lg transition-all p-5 flex items-start gap-4 col-span-2"
                    >
                        <div className="p-3 rounded-xl bg-blue-50 group-hover:scale-105 transition">
                            <Mail className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Email</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                Untuk keperluan resmi atau lampiran dokumen.
                            </p>

                            <div className="mt-3 inline-flex items-center gap-2 text-blue-700 font-medium">
                                halo@atmagirigroup.id
                                <span className="group-hover:translate-x-0.5 transition">→</span>
                            </div>
                        </div>
                    </a>

                    <a
                        href={telLink}
                        className="group rounded-2xl border bg-white shadow-sm hover:shadow-lg transition-all p-5 flex items-start gap-4 col-span-2"
                    >
                        <div className="p-3 rounded-xl bg-amber-50 group-hover:scale-105 transition">
                            <Phone className="w-6 h-6 text-amber-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Telepon</h3>
                            <p className="text-sm text-muted-foreground mt-1">
                                Hubungi tim kami pada jam kerja.
                            </p>
                            <div className="mt-3 inline-flex items-center gap-2 text-amber-700 font-medium">
                                {CONTACT.PHONE_NUMBER}
                                <span className="group-hover:translate-x-0.5 transition">→</span>
                            </div>
                        </div>
                    </a>

                    <div className="rounded-2xl border bg-white shadow-sm p-5 flex items-start gap-4 col-span-2 md:col-span-3">
                        <div className="p-3 rounded-xl bg-purple-50">
                            <MapPin className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Alamat Kantor</h3>
                            <p className="text-sm text-muted-foreground mt-1">{CONTACT.ADDRESS}</p>
                        </div>
                    </div>

                    <div className="rounded-2xl border bg-white shadow-sm p-5 flex items-start gap-4 col-span-2 md:col-span-3">
                        <div className="p-3 rounded-xl bg-rose-50">
                            <Clock className="w-6 h-6 text-rose-600" />
                        </div>
                        <div>
                            <h3 className="font-semibold text-lg">Jam Operasional</h3>
                            <p className="text-sm text-muted-foreground mt-1">{CONTACT.HOURS}</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </DefaultLayout>
    )
}

export default Contact