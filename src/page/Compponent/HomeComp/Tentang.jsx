import React from 'react'
import daunKanan from '../../../assets/daunKanan.png'
import daunKiri from '../../../assets/daunKiri.png'
import logoTentang from '../../../assets/logoTentang.png'
import logoTentangPC from '../../../assets/LogoTentangPC.png'
import bgTentang from '../../../assets/bgTentang.png'
import TentangTittle from '../../../assets/TentangTittle.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";


const Tentang = () => {
    return (
        <div className='w-full bg-cust-background h-max py-[30rem] relative xl:py-0 xl:pb-0'>
            {/* BACKGROUND */}
            <img src={bgTentang} alt="" className='hidden xl:block' />

            <img src={daunKiri} alt="daun kiri" className='h-20 xl:h-60 left-0 top-0 absolute xl:-top-8' />
            <img src={daunKanan} alt="daun kanan" className='h-20 xl:h-60 right-0 top-0 absolute xl:-top-8' />
            <div className='w-full flex h-max absolute justify-center top-8 xl:top-7'>
            <img src={TentangTittle} alt="" className='absolute w-[20rem] mx-auto text-4xl xl:text-7xl xl:pt-8 xl:w-[43rem]' />
            </div>
            <div className='absolute h-max pb-96 xl:pb-56 top-36 xl:top-64 xl:flex xl:flex-row-reverse xl:mx-20 xl:gap-40'>
                <img src={logoTentang} alt="logo BEM" className=' w-44 h-64 mx-auto xl:hidden' />
                <div className='hidden relative xl:flex flex-col items-center w-64 h-[26rem] mt-4 mx-auto'>
                <img src={logoTentangPC} alt="logo BEM" className='w-60'/>
                <div className='h-16 box-border -mt-3 bg-cust-gray w-[0.14rem] '></div>
                <div className='w-[23rem] -rotate-[4deg] h-16 bg-orange-300 mr-1 rounded-full font-lato text-cust-white text-2xl flex items-center justify-center absolute -bottom-1'></div>
                <div className='w-[23rem] rotate-3 h-16 bg-cust-orange rounded-full font-lato text-cust-white text-2xl flex items-center justify-center'>Kabinet Arthakara</div>
                </div>
                <div className='mx-8 xl:mx-0 font-lato flex flex-col xl:w-[35rem] '>
                    <h3 className='text-start font-bold xl:font-extrabold text-lg xl:text-[32px] mt-8 mb-4 xl:mb-8'>Apa itu BEM FILKOM UB?</h3>
                    <p className='text-justify font-normal text-sm xl:text-2xl mb-5 xl:mb-8 xl:leading-7'>BEM FILKOM UB merupakan badan eksekutif yang memiliki 4 fungsi utama dalam membantu mahasiswa FILKOM UB berproses, diantaranya ialah Pelayanan khususnya dibidang Advokasi dan Kesejahteraan Mahasiswa, Pengembangan dalam mengembangkan soft skill serta minat bakat Mahasiswa, Pengabdian dalam mengamalkan salah satu Tri Dharma Perguruan Tinggi, dan Pergerakan yang mewadahi mahasiswa untuk bertindak dalam mengawal isu yang beredar.</p>
                    <button className='w-max ring-1 ring-cust-orange text-cust-orange hover:bg-cust-orange hover:text-white rounded-full px-6 py-2 xl:text-xl'><a href="" target='_blank'>Selengkapnya <FontAwesomeIcon className="relative" icon={faArrowRightLong} /></a></button>
                </div>
            </div>
        </div>
    )
}

export default Tentang


{/* <div key="1" className="card bg-red-50 xl:w-[18.75rem] xl:h-[18.5rem] xl:rounded-3xl xl:p-5">
                                <div className=' xl:rounded-3xl w-full h-full'>
                                    <img src={fotoArtikel} alt="" className='xl:rounded-[.625rem]' />
                                    <p className='font-poppins text-sm text-cust-gray xl:w-full text-start xl:mt-4'>Selasa, 22/04/2024</p>
                                    <h3 className='font-poppins xl:w-full text-start xl:mt-2 font-bold text-lg'>Open Tender Ketua Angkatan Filkom 2024</h3>
                                </div>
                            </div> */}