import React from "react"

const Company = (props) => {
    return (
        <div className="flex flex-col w-full h-auto my-2 bg-cyan-700 items-center">
            <div className="max-w-[10%]">
                <h2 className="relative font-sans text-white font-bold text-center">{props.heading}</h2>
                {/* //!add garis dibawah heading nanti */}
                <div className="relative"></div>
            </div>
            <div className="border border-cust-green rounded-lg my-4 w-9/12 h-100">
                
            </div>
            {/* //!tambahin buat company profile & magazine nanti */}
        </div>
    )

}

Company.defaultProps = {
    heading: 'Company Profile',
}

export default Company