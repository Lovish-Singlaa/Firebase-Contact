import { useState, useEffect } from 'react'
import { FiSearch } from 'react-icons/fi'
import Navbar from './assets/components/Navbar'
import './App.css'
import { AiFillPlusCircle } from 'react-icons/ai'
import { collection, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from './config/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactCard from './assets/components/ContactCard'
import Modal from './assets/components/Modal'
import UpdateContact from './assets/components/UpdateContact'
import NoContact from './assets/components/NoContact'
function App() {

  const [contacts, setContact] = useState([]);
  const [isOpen, setOpen] = useState(false);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      const contactRef = collection(db, "contacts");
      onSnapshot(contactRef, (snapshot)=>{
        const contactList = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });
        setContact(contactList);
        return contactList;
      })
    }
    getContacts();
  }, []);

  const filterContacts = (e)=>{
    const value = e.target.value;

    const contactRef = collection(db, "contacts");
      onSnapshot(contactRef, (snapshot)=>{
        const contactList = snapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          };
        });

        const filteredContacts = contactList.filter((contact)=>contact.name.toLowerCase().includes(value.toLowerCase()))

        setContact(filteredContacts);
        return filteredContacts;
      })
  }

  return (
    <>
      <div className='max-w-[360px] mx-auto'>
        <Navbar />
        <div className='flex gap-3'>
          <div className='flex relative items-center'>
            <FiSearch className='text-white absolute ml-1' />
            <input onChange={filterContacts} type="text" className='rounded-md bg-transparent border border-white text-white pl-6 h-10 w-[295px]' />
          </div>
          <AiFillPlusCircle onClick={onOpen} className='flex text-white text-5xl cursor-pointer' />
        </div>

        {contacts<=0 ? <NoContact/> : contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
        <UpdateContact isOpen={isOpen} onClose={onClose}/>
      </div>
      <ToastContainer position='bottom-center'/>
    </>
  )
}

export default App
