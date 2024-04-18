import React from "react"

const Company = (props) => {
    return (
        <div className="flex flex-col w-full my-2">
            <div className="">
                <h2 className="relative font-sans">{props.heading}</h2>
                //!add garis dibawah heading nanti
                <div className=""></div>
            </div>
            <div className="border border-cust-green rounded-lg my-2">
                //!tambahin buat company profile & magazine nanti
            </div>
        </div>
    )

}

Company.defaultProps = {
    heading: 'Company Profile',
}

export default Company