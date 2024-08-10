import { Formik, Form, Field, ErrorMessage } from 'formik'
import { collection,addDoc, updateDoc } from 'firebase/firestore'
import Modal from './Modal'
import { db } from '../../config/firebase';
import { doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import * as Yup from 'yup'

const UpdateContact = ({ isOpen, onClose, contact, isUpdate }) => {

    const ContactSchemaValidation = Yup.object().shape({
        name: Yup.string().required("Name is Required"),
        email: Yup.string().email("Invalid Email").required("Email is Required"),
    })

    const addContact = async(contact)=>{
        const contactRef = collection(db,"contacts");
        await addDoc(contactRef,contact);
        onClose();
        toast.success("Contact Added Succesfully")
    }

    const updateContact = async(contact, id)=>{
        const contactRef = doc(db,"contacts", id);
        await updateDoc(contactRef,contact);
        onClose();
        toast.success("Contact Updated Succesfully")
    }
    return (
        <div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <Formik
                validationSchema={ContactSchemaValidation}
                initialValues= 
                {isUpdate ?
                {
                    name: contact.name,
                    email: contact.email,
                } : 
                {
                    name:"",
                    email:"",
                }}

                onSubmit={(values)=>{
                    console.log(values);
                    {isUpdate ? updateContact(values,contact.id) : addContact(values)};
                }}
                >
                    
                    <Form className='flex flex-col gap-3'>
                        <div className='flex flex-col gap-2 '>
                            <label htmlFor="name">Name</label>
                            <Field name='name' className='border-2 border-black p-1' />
                            <div className='text-red-500 text-xs'>
                            <ErrorMessage name='name'/>
                            </div>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label htmlFor="name">Email</label>
                            <Field name="email" className='border-2 border-black p-1' />
                            <div className='text-red-500 text-xs'>
                            <ErrorMessage name='email'/>
                            </div>
                        </div>

                        <button type='submit' className='bg-orange border border-black rounded-md px-2 font-semibold self-end'>{isUpdate ? "Update" : "Add"} Contact</button>
                    </Form>
                </Formik>
            </Modal>
        </div>
    )
}

export default UpdateContact;