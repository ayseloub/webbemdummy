import React from "react"

const Company = (props) => {
    return (
        <div className="flex flex-col w-full max-w-[1700px] h-auto m-0 p-8 bg-cust-background items-center justify-center">
            <div className="max-w-max pb-4">
                <h2 className="relative font-sans text-cust-artikel font-bold text-center pb-2">{props.heading}</h2>
                {/* //!add garis dibawah heading nanti */}
                <div className="relative h-1 border border-cust-green">
                    
                </div>
            </div>
            <div className="border border-cust-green rounded-lg m-0 p-0.5 w-9/12 h-4/6">
                <iframe className="relative border border-white mx-auto w-full rounded-lg" src=""></iframe>
            </div>
            {/* //!tambahin buat company profile & magazine nanti */}
        </div>
    )

}

Company.defaultProps = {
    heading: 'Company Profile',
}

export default Company