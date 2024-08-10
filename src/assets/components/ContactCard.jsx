import React, { useState } from 'react'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { IoMdTrash } from 'react-icons/io'
import { RiEditCircleLine } from 'react-icons/ri'
import { deleteDoc, doc } from 'firebase/firestore'
import {db} from "../../config/firebase"
import UpdateContact from './UpdateContact'
import { toast } from 'react-toastify'

const ContactCard = ({ contact }) => {
  const deleteContact = async(id)=>{
    await deleteDoc(doc(db,"contacts",id));
    toast.success("Contact Deleted Successfully");
  }

  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <div className='mt-3 flex items-center justify-between bg-yellow rounded-lg px-1 h-16'>
        <div key = {contact.id} className='text-4xl text-orange'><HiOutlineUserCircle/></div>
        <div>
          <h2 className='font-semibold text-lg'>{contact.name}</h2>
          <p>{contact.email}</p>
        </div>
        <div onClick={onOpen} className='text-4xl cursor-pointer'><RiEditCircleLine/></div>
       <div onClick={()=>{deleteContact(contact.id)}} className='text-4xl cursor-pointer'><IoMdTrash/></div>
        </div>
        <UpdateContact isUpdate isOpen={isOpen} onClose={onClose} contact={contact} />       


    </div>
  )
}

export default ContactCard
