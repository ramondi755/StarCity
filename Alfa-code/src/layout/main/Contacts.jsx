import React from 'react'
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
// import HeaderPhones from '../../assets/icons/HeaderPhones'
// import InstagramIcon from '../../assets/icons/InstagramIcon'

function Contacts() {

//   //bot token
// let telegram_bot_id = "6369765814:AAFDsCFu9znQCfA9MLoFpPZEaqY0NRKffog"; // token'ni o'rniga Siz yaratgan Bot tokenini yozing
// //chat id
// let chat_id = 5479086167; // 1111'ni o'rniga habar borishi kerak bo'lgan joyni ID'sini yozing (Batafsil videoda)
// let u_name, num, message;
// let ready = function() {
//     u_name = document.getElementById("name").value;
//     num = document.getElementById("num").value;
//     message = document.getElementById("message").value;
//     message = "Ismi: " + u_name + "Tel " + num + "\nIzoh: " + message;
// };
// let sendtelegram = function() {
//     ready();
//     let settings = {
//         "async": true,
//         "crossDomain": true,
//         "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
//         "method": "POST",
//         "headers": {
//             "Content-Type": "application/json",
//             "cache-control": "no-cache"
//         },
//         "data": JSON.stringify({
//             "chat_id": chat_id,
//             "text": message
//         })
//     };
//     $.ajax(settings).done(function(response) {
//         console.log(response);
//     });
//     document.getElementById("name").value = "";
//     document.getElementById("num").value = "";
//     document.getElementById("message").value = "";
//     return false;
// };


const [uName, setUName] = useState('');
// const [email, setEmail] = useState('');
// const [message, setMessage] = useState('');
const [phone, setPhone] = useState('');



// const handleMessageChange = (event) => {
  //   setMessage(event.target.value);
  // };
  
  // const handleEmailChange = (event) => {
    //     setEmail(event.target.value);
    //   };
    
const handleInputChange = (event) => {
    setUName(event.target.value);
};

const handlePhoneChange = (event) => {
    setPhone(event.target.value);
};

const sendMessage = () => {

  const formattedMessage = `Ismi: ${uName}\nTelefon: ${phone}`;

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'cache-control': 'no-cache',
    },
    body: JSON.stringify({
      chat_id: 5479086167,
      text: formattedMessage,
    }),
  };

  fetch(`https://api.telegram.org/bot6319379852:AAFvMtftdmsz9MzyMcKSyt8AhQ6LJFioM3M/sendMessage`, requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

  // Reset input fields
  setUName('');
  // setMessage('');
  // setEmail('')
  setPhone('')
};

AOS.init();

  return (
    <section className="contacts" id='contacts' data-aos="fade-up" data-aos-duration="1100">
        <div className="container contacts-container">

            <h3 className="contacts-container__title">Kontaktlar</h3>

        <div className="contacts__card">
        <form action="submit" className='contacts-container__form contacts-form'>

            <div className="contacts-form__section">
            <label htmlFor="name" className='contacts-form__label'>Ismingiz</label>
            <input onChange={handleInputChange} value={uName} name='name' id='name' className='contacts-form__input' type="text" required />
            </div>

            <div className="contacts-form__section">
            <label htmlFor="number" className='contacts-form__label'>Telefo'n raqam</label>
            <input onChange={handlePhoneChange} value={phone} name='number' id='num' className='contacts-form__input' type="number" required />
            </div>
            <button onClick={sendMessage} type='submit' className='contacts-form__button'>Yuborish</button>
            
        </form>
        </div>

        </div>
    </section>
  )
}

export default Contacts