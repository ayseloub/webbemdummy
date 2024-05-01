import React from 'react';
import { SquareX } from 'lucide-react';
import maskot from "../../../assets/maskot.svg";

const Modal = ({ onClose, selectedItem }) => (
  <div className='bg-black bg-opacity-30 backdrop-blur-sm inset-0 fixed z-50 flex justify-center items-center'>
    <div className='px-8 py-6 bg-white container-md rounded-xl size-content relative'>
      <button className='absolute top-2 right-2 hover:bg-cust-orange' onClick={onClose}> <SquareX/></button>
      <div className='box-border drop-shadow-lg border-slate-100'>
          <img src={selectedItem.imageSrc} alt={selectedItem.altText} className="pt-4 size-36 mx-auto" />
          <p className="text-center pt-2 font-lato">{selectedItem.altText}</p>
      </div>
      <div className='mt-2'>
          <h1 className='text-cust-orange font-bold font-lato text-xl'>Alamat</h1>
          <p className='text-md font-lato opacity-50'>{selectedItem.alamat}</p>
      </div>

      <div className='mt-2 font-lato'>
          <h1 className='text-cust-orange font-bold text-xl'>Benefit</h1>
          <ul className='text-md opacity-50 text-left' style={{ listStyleType: 'disc' }}>
              {selectedItem.benefit.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
      </div>

      <div className='mt-2 font-lato'>
          <h1 className='text-cust-orange font-bold text-xl'>Ketentuan</h1>
          <ul className='text-md opacity-50 text-left' style={{ listStyleType: 'disc' }}>
              {selectedItem.ketentuan.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
      </div>
      <img src={maskot} alt="maskot" className='size-20 absolute' style={{ right: '-40px', bottom: '-20px' }}/>
    </div>
  </div>
);

export default Modal;
