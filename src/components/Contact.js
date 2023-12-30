import React, { useState } from 'react';

function Contact() {
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [name, setName] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessages, setErrorMessages] = useState({});

    return (
        <div className='ContactFormContainer'>
            <form target="_blank" action="https://formsubmit.co/sales@salishsparklecleaning.com" method="POST">
            <input type="hidden" name="_subject" value="New Contact Request: " />
            <input type="hidden" name="_autoresponse" value="Thank you for reaching out to Salish Sparkle Cleaning, we will be in touch shortly!"></input>
            <input type="hidden" name="_cc" value="kolby@salishsparklecleaning.com,jasmin@salishsparklecleaning.com"></input>
        <span className='ContactFormHeader'>Contact Form</span>
        <br></br>
        <div className='ErrorMessageContainer'>
        {Object.keys(errorMessages).map((element, index) => {
            return <span key={index} className="ErrorMessage" src={element} alt={`Slide ${index}`}>{errorMessages[element]}</span>
        })}
        </div>
        <div className='ContactFormLine'>
            <div className='Inline'>
                <label for="Email" className="InputLabel">Email Address: </label>
                <input onChange = {(e) => setEmail(e.target.value)} type="email" id="Email" name="Email" className="InputField" required />
            </div>
            <div className='Inline'>
                <label for="Phonenumber" className="InputLabel">Phone Number: </label>
                <input onChange = {(e) => setPhoneNumber(e.target.value)} type="tel" id="Phone Number" name="Phonenumber" className="InputField" required />
            </div>    
        </div>
        <div className='ContactFormLine'>
            <div className='Inline'>
                <label for="Name" className="InputLabel">Name: </label>
                <input onChange = {(e) => setName(e.target.value)} type="text" id="Name" name="Name" className="InputField" required />
            </div>
            <div className='Inline'>
                <label for="Zipcode" className="InputLabel">Zipcode: </label>
                <input onChange = {(e) => setZipcode(e.target.value)} type="text" id="Zipcode" name="Zipcode" className="InputField" required />
            </div>    
        </div>
        <div className='ContactFormHeader'>
            <span>Tell Us About Your Home/Space and What You're Looking For:</span>
            <div>
                <textarea type="text" id="Message" name="Message" onChange = {(e) => setMessage(e.target.value)} className='ContactFormInputField' required></textarea>
            </div>
        </div>
        <button type="submit" className='ContactFormSendEmailButton'>Send Email</button>
        </form>
    </div>
    );
  }
  
  export default Contact;
  
