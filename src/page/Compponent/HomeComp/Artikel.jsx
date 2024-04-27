import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide"
import fotoArtikel from '../../../assets/fotoArtikel.png'
import bgArtikelPC from '../../../assets/bgArtikelPC.png'
import ArtikelTittle from '../../../assets/ArtikelTittle.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

export default function CarouselCard() {

    const [activeSlide, setActiveSlide] = useState(0);
    useEffect(() => {
        const slider = new Glide(".glide-04", {
            type: "carousel",
            focusAt: "center",
            perView: 1,
            animationDuration: 700,
            gap: 24,
            classNames: {
                nav: {
                    active: "[&>*]:bg-wuiSlate-700",
                },

            },
            breakpoints: {
                1024: {
                    perView: 2,
                },
                640: {
                    perView: 1,
                },
            },
        });

        slider.on('run.after', () => {
            setActiveSlide(slider.index);
        });

        slider.mount();

        return () => {
            slider.destroy()
        }
    }, [])

    const totalSlides = 3;

    const nextSlide = () => {
        if (activeSlide < totalSlides - 1) {
            setActiveSlide(activeSlide + 1);
        }
    };

    const prevSlide = () => {
        if (activeSlide > 0) {
            setActiveSlide(activeSlide - 1);
        }
    };

    return (
        <>
            {/*<!-- Component: Card Carousel --> */}

            <div className=" relative w-full h-max  xl:-top-20 overflow-hidden rounded shadow-xl shadow-slate-200">
                {/* background */}
                <img src={bgArtikelPC} alt="" className="hidden xl:flex h-max" />
                {/*    <!-- Slides --> */}
                <div className="glide-04 absolute w-full h-max top-0">
                    {/* tittle */}
                    <div className='w-full flex h-max relative justify-center top-8 xl:top-7'>
                        <img src={ArtikelTittle} alt="" className='absolute w-full mx-auto text-4xl xl:text-7xl xl:pt-36  xl:w-[43rem]' />
                    </div>
                    <div className="overflow-hidden relative top-96" data-glide-el="track">
                        <ul className=" flex w-full mx-auto overflow-hidden ">
                            {[1, 2, 3].map((slide, index) => (
                                <li className="flex justify-center gap-28">
                                    <div key="1" className="card bg-red-50 xl:w-[18.75rem] xl:h-[18.5rem] xl:rounded-3xl xl:p-5">
                                        <div className=' xl:rounded-3xl w-full h-full'>
                                            <img src={fotoArtikel} alt="" className='xl:rounded-[.625rem]' />
                                            <p className='font-poppins text-sm text-cust-gray xl:w-full text-start xl:mt-4'>Selasa, 22/04/2024</p>
                                            <h3 className='font-poppins xl:w-full text-start xl:mt-2 font-bold text-lg'>Open Tender Ketua Angkatan Filkom 2024</h3>
                                        </div>
                                    </div>
                                    <div key="1" className="card bg-red-50 xl:w-[18.75rem] xl:h-[18.5rem] xl:rounded-3xl xl:p-5">
                                        <div className=' xl:rounded-3xl w-full h-full'>
                                            <img src={fotoArtikel} alt="" className='xl:rounded-[.625rem]' />
                                            <p className='font-poppins text-sm text-cust-gray xl:w-full text-start xl:mt-4'>Selasa, 22/04/2024</p>
                                            <h3 className='font-poppins xl:w-full text-start xl:mt-2 font-bold text-lg'>Open Bidding BPH Artropolis 2024</h3>
                                        </div>
                                    </div>
                                    <div key="1" className="card bg-red-50 xl:w-[18.75rem] xl:h-[18.5rem] xl:rounded-3xl xl:p-5">
                                        <div className=' xl:rounded-3xl w-full h-full'>
                                            <img src={fotoArtikel} alt="" className='xl:rounded-[.625rem]' />
                                            <p className='font-poppins text-sm text-cust-gray xl:w-full text-start xl:mt-4'>Selasa, 22/04/2024</p>
                                            <h3 className='font-poppins xl:w-full text-start xl:mt-2 font-bold text-lg'>Open Bidding BPH HOLOGY 7.0 2024</h3>
                                        </div>
                                    </div>
                                </li>,
                                <li className="flex justify-center gap-28">
                                    <div key="2" className="card bg-red-50 xl:w-[18.75rem] xl:h-[18.5rem] xl:rounded-3xl xl:p-5">
                                        <div className=' xl:rounded-3xl w-full h-full'>
                                            <img src={fotoArtikel} alt="" className='xl:rounded-[.625rem]' />
                                            <p className='font-poppins text-sm text-cust-gray xl:w-full text-start xl:mt-4'>Selasa, 22/04/2024</p>
                                            <h3 className='font-poppins xl:w-full text-start xl:mt-2 font-bold text-lg'>Open Registrasi Sekolah Kaderisasi 2024</h3>
                                        </div>
                                    </div>
                                    <div key="2" className="card bg-red-50 xl:w-[18.75rem] xl:h-[18.5rem] xl:rounded-3xl xl:p-5">
                                        <div className=' xl:rounded-3xl w-full h-full'>
                                            <img src={fotoArtikel} alt="" className='xl:rounded-[.625rem]' />
                                            <p className='font-poppins text-sm text-cust-gray xl:w-full text-start xl:mt-4'>Selasa, 22/04/2024</p>
                                            <h3 className='font-poppins xl:w-full text-start xl:mt-2 font-bold text-lg'>Open Tender Ketua Angkatan Filkom 2025</h3>
                                        </div>
                                    </div>
                                    <div key="2" className="card bg-red-50 xl:w-[18.75rem] xl:h-[18.5rem] xl:rounded-3xl xl:p-5">
                                        <div className=' xl:rounded-3xl w-full h-full'>
                                            <img src={fotoArtikel} alt="" className='xl:rounded-[.625rem]' />
                                            <p className='font-poppins text-sm text-cust-gray xl:w-full text-start xl:mt-4'>Selasa, 22/04/2024</p>
                                            <h3 className='font-poppins xl:w-full text-start xl:mt-2 font-bold text-lg'>Open Tender Ketua Angkatan Filkom 2025</h3>
                                        </div>
                                    </div>
                                </li>,
                                <li className="flex justify-center gap-28">
                                    <div key="3" className="card bg-red-50 xl:w-[18.75rem] xl:h-[18.5rem] xl:rounded-3xl xl:p-5">
                                        <div className=' xl:rounded-3xl w-full h-full'>
                                            <img src={fotoArtikel} alt="" className='xl:rounded-[.625rem]' />
                                            <p className='font-poppins text-sm text-cust-gray xl:w-full text-start xl:mt-4'>Selasa, 22/04/2024</p>
                                            <h3 className='font-poppins xl:w-full text-start xl:mt-2 font-bold text-lg'>Open Registrasi Sekolah Kaderisasi 2024</h3>
                                        </div>
                                    </div>
                                    <div key="3" className="card bg-red-50 xl:w-[18.75rem] xl:h-[18.5rem] xl:rounded-3xl xl:p-5">
                                        <div className=' xl:rounded-3xl w-full h-full'>
                                            <img src={fotoArtikel} alt="" className='xl:rounded-[.625rem]' />
                                            <p className='font-poppins text-sm text-cust-gray xl:w-full text-start xl:mt-4'>Selasa, 22/04/2024</p>
                                            <h3 className='font-poppins xl:w-full text-start xl:mt-2 font-bold text-lg'>Open Tender Ketua Angkatan Filkom 2025</h3>
                                        </div>
                                    </div>
                                    <div key="3" className="card bg-red-50 xl:w-[18.75rem] xl:h-[18.5rem] xl:rounded-3xl xl:p-5">
                                        <div className=' xl:rounded-3xl w-full h-full'>
                                            <img src={fotoArtikel} alt="" className='xl:rounded-[.625rem]' />
                                            <p className='font-poppins text-sm text-cust-gray xl:w-full text-start xl:mt-4'>Selasa, 22/04/2024</p>
                                            <h3 className='font-poppins xl:w-full text-start xl:mt-2 font-bold text-lg'>Open Tender Ketua Angkatan Filkom 2025</h3>
                                        </div>
                                    </div>
                                </li>
                            ))}


                        </ul>
                        {/*    <!-- Controls --> */}
                        <div className="flex gap-8 w-full h-max items-center justify-center  mt-10" data-glide-el="controls">
                            {/* Tombol Prev */}
                            <button className={`h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 lg:h-12 lg:w-12 ${activeSlide === 0 ? 'pointer-events-none opacity-50' : ''}`} data-glide-dir="<"
                                onClick={prevSlide}
                                aria-label="prev slide">
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>

                            {/* Indikator */}
                            <div className="flex gap-8">
                                {[...Array(totalSlides).keys()].map((indicator) => (
                                    <button
                                        key={indicator}
                                        className={`group ${activeSlide === indicator ? 'bg-cust-orange' : ''} rounded-full`}
                                        data-glide-dir={`=${indicator}`}
                                        aria-label={`goto slide ${indicator + 1}`}
                                    >
                                        <span className="h-12 justify-center items-center w-12 p-1 flex rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none">{indicator + 1}</span>
                                    </button>
                                ))}
                            </div>

                            {/* Tombol Next */}
                            <button className={`h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 lg:h-12 lg:w-12 ${activeSlide === totalSlides - 1 ? 'pointer-events-none opacity-50' : ''}`} data-glide-dir=">"
                                onClick={nextSlide}
                                aria-label="next slide">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>

                    </div>
                </div>

            </div>
            {/*<!-- End Card Carousel --> */}
        </>
    )
}
