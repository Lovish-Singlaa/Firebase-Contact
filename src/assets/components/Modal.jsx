import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const Modal = ({isOpen, onClose, children}) => {
  return (
    <>      
        {isOpen && (
            <>
            <div className='bg-white min-h-52 max-w-[90%] m-auto relative bottom-20 z-50 p-3'>
                <div className='flex justify-end'>
                    <AiOutlineClose onClick={onClose} className='text-3xl cursor-pointer'/>
                </div>
                {children}
            </div>
            <div onClick={onClose} className='backdrop-blur absolute top-0 z-40 h-screen w-screen'></div>
            </>
        )} 
    </>
  )
}

export default Modal
