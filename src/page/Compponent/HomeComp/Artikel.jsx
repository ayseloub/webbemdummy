import React, { useEffect, useState } from "react";
import Glide from "@glidejs/glide"
import fotoArtikel from '../../../assets/fotoArtikel.png'
import bgArtikelPC from '../../../assets/bgArtikelPC.png'
import ArtikelTittle from '../../../assets/ArtikelTittle.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import bgArtikelHP from '../../../assets/bgArtikelHP.png'
import CardContent from "./CardContent";

export default function CarouselCard() {

    const [activeSlide, setActiveSlide] = useState(0);
    const [cardsPerSlide, setCardsPerSlide] = useState(3);

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

        });

        slider.on('run.after', () => {
            setActiveSlide(slider.index);
        });

        slider.mount();

        const handleResize = () => {
            const isMobile = window.innerWidth <= 768; 
            setCardsPerSlide(isMobile ? 4 : 3); 
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            slider.destroy();
            window.removeEventListener('resize', handleResize);
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

    const cards = [
        {
            id: 1,
            img: fotoArtikel,
            tanggal: 'Selasa, 22/04/2024',
            judul: 'Open Tender Ketua Angkatan Filkom 2024',
        },
        {
            id: 2,
            img: fotoArtikel ,
            tanggal: 'Selasa, 22/04/2024',
            judul: 'Open Tender Ketua Angkatan Filkom 2025',
        },
        {
            id: 3,
            img: fotoArtikel ,
            tanggal: 'Selasa, 22/04/2024',
            judul: 'Open Tender Ketua Angkatan Filkom 2026',
        },

    ]

    return (
        <>
            {/*<!-- Component: Card Carousel --> */}

            <div className=" relative w-full h-max -top-10 xl:-top-20 overflow-hidden rounded shadow-xl shadow-slate-200">
                {/* background */}
                <img src={bgArtikelPC} alt="" className="hidden xl:flex h-max" />
                <img src={bgArtikelHP} alt="" className="xl:hidden " />
                {/*    <!-- Slides --> */}
                <div className="glide-04 absolute w-full h-max top-0">
                    {/* tittle */}
                    <div className='w-full flex h-max relative justify-center top-8 xl:top-7'>
                        <img src={ArtikelTittle} alt="" className='absolute w-[20rem] mx-auto text-4xl xl:text-7xl xl:pt-36  xl:w-[43rem]' />
                    </div>
                    {/* slides */}
                    <div className="overflow-hidden relative top-28 mx-3 xl:top-96" data-glide-el="track">
                        <ul className=" flex flex-wrap w-full mx-auto overflow-hidden">
                            {cards.map((card, index) => (
                                <li key={card.id} className={`flex justify-center gap-2 xl:gap-28 ${cardsPerSlide > 3 ? 'grid grid-cols-2' : ''}`}>
                                    {[...Array(cardsPerSlide)].map((_, i) => (
                                        <CardContent key={i} card={card} />
                                    ))}
                                </li>
                            ))}
                        </ul>
                        {/*    <!-- Controls --> */}
                        <div className="flex gap-3 xl:gap-8 w-full h-max items-center justify-center mt-4 xl:mt-10" data-glide-el="controls">
                            {/* Tombol Prev */}
                            <button className={`h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 lg:h-12 lg:w-12 ${activeSlide === 0 ? 'pointer-events-none opacity-50' : ''}`} data-glide-dir="<"
                                onClick={prevSlide}
                                aria-label="prev slide">
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>

                            {/* Indikator */}
                            <div className="flex gap-3 xl:gap-8">
                                {[...Array(totalSlides).keys()].map((indicator) => (
                                    <button
                                        key={indicator}
                                        className={`group ${activeSlide === indicator ? 'bg-cust-orange' : ''} rounded-full`}
                                        data-glide-dir={`=${indicator}`}
                                        aria-label={`goto slide ${indicator + 1}`}
                                    >
                                        <span className="h-8 xl:h-12 justify-center items-center w-8 xl:w-12 p-1 flex rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none">{indicator + 1}</span>
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
