import React from "react";
import kabinetArthakara from "../../../assets/kabinetArthakara.png";

const Kabinetpic = () => {
    return (
        <div className="flex flex-col w-full max-w-[1920px] h-auto mt-0 mb-15 p-8 bg-cust-background items-center justify-center">
            <div className="border border-transparent rounded-lg m-0 p-0.5 w-8/12 h-auto max-h-96">
                <img src={kabinetArthakara} alt="Gambar Kabinet Arthakara"/>
            </div>
        </div>
    )
}

export default Kabinetpic