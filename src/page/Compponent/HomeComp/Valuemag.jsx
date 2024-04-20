import React from "react"

const Magazine = (props) => {
    return (
        <div className="flex flex-col w-full max-w-[1920px] h-auto mt-0 mb-15 p-8 bg-cust-background items-center justify-center">
            <div className="max-w-max pb-4">
                <h2 className="relative font-lato text-8xl text-cust-green font-bold text-center pb-8">{props.heading}</h2>
                {/* //!add garis dibawah heading nanti */}
                <div className="relative mx-auto w-22vw h-0.5 bg-cust-lime max-h-max">
                    <div className="mx-auto -translate-y-[3px] w-1/12vw h-2 bg-cust-green"></div>
                </div>
            </div>
            <div className="border border-transparent rounded-lg m-0 p-0.5 w-8/12 h-auto max-h-96 aspect-video">
                <iframe className="fp-iframe align-middle block relative mx-auto my-0 border border-cust-green w-full h-full rounded-lg"
                 src={props.embed}
                 allowFullScreen
                >
                    {/* tes flipbook */}
                </iframe>
            </div>
        </div>
    )
}

Magazine.defaultProps = {
    heading: 'Value Magazine',
    embed: 'https://heyzine.com/flip-book/2d0745dbda.html',
}

export default Magazine