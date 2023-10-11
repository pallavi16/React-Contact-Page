import React from 'react'
import styles from './ContactForm.module.css';
import Button from './Button';
import {MdMessage} from 'react-icons/md';
import {FiPhoneCall} from 'react-icons/fi';
import {MdEmail} from 'react-icons/md';

const ContactForm = () => {
  return (
   <section className={styles.container}>
    <div className={styles.form_container}>
        <div className={styles.top_btn}>
        <Button text="VIA SUPPORT CHAT"
                icon={<MdMessage fontSize="18px" />} />
        <Button text="VIA CALL"
                icon={<FiPhoneCall fontSize="20px"></FiPhoneCall>} />   
        </div>
        <Button isSecondary={true} text="VIA EMAIL FORM"
                icon={<MdEmail fontSize="20px"></MdEmail>} /> 

        <form>
            <div className={styles.form_control}>
            <label htmlFor='name' >Name</label>
            <input type='text' name="Name" />
            </div>

            <div className={styles.form_control}>
            <label htmlFor='email' >E-mail</label>
            <input type='text' name="Email" />
            </div>

            <div className={styles.form_control}>
            <label htmlFor='text' >TEXT</label>
            <textarea name='text'></textarea>
            </div>
            <div style={{
                display: "flex",
                justifyContent: "end",    
            }}>
            <Button text="Submit" /> </div>
            
        </form>        
    </div>
    <div className={styles.contact_image}>
        <img src='images/contact-image.svg' alt="contact-image" />
    </div>
   </section>
  )
}

export default ContactForm