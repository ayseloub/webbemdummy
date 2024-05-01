import React from "react"
import headCompany from "../../../assets/headCompany.svg"

const Company = (props) => {
    return (
        <div className="flex flex-col w-full lg:max-w-[1920px] h-auto mt-0 mb-0 lg:p-0 bg-cust-background items-center justify-center">
            {/* <img src={bgCompany} className="hidden xl:flex h-max" /> */}
            <div className="flex flex-col w-full lg:bg-[url('https://res.cloudinary.com/dnoqmou6x/image/upload/v1714531214/bgCompany_vqhqxb.png')] mx-auto items-center justify-center">
                <div className="max-w-max mb-8 pt-12 lg:mb-12 lg:pt-20">
                    <img src={headCompany} alt="Heading Magazine" className="w-[20rem] xl:w-max" />
                    {/* <h2 className="relative font-lato text-8xl text-cust-green font-bold text-center pb-8">{props.heading}</h2> */}
                    {/* //!add garis dibawah heading nanti */}
                    {/* <div className="relative mx-auto w-22vw h-0.5 bg-cust-lime max-h-max">
                        <div className="mx-auto -translate-y-[3px] w-1/12vw h-2 bg-cust-green"></div>
                    </div> */}
                </div>
                <div className="rounded-lg m-0 p-0.5 w-11/12 h-auto max-h-[580px] aspect-video">
                    <iframe className="relative mx-auto my-0 border border-cust-green w-full h-full rounded-lg"
                    src={props.embed}
                    title="Youtube Video Player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture fullscreen"
                    >
                        
                    </iframe>
                </div>
            </div>
            {/* //!tambahin buat company profile & magazine nanti */}
        </div>
    )

}

Company.defaultProps = {
    // heading: 'Company Profile',
    embed: 'https://www.youtube.com/embed/fx2Z5ZD_Rbo',
}

export default Company