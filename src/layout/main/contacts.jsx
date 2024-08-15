import React, {useState } from 'react'
import axios from 'axios';

function Contact() {

  const TOKEN = '7431850041:AAGtjLcp77LrSOOh09o46zwLqJZ9YPKW3Xk';
  const CHAT_ID = '-1002184949538';
  const URL_API = `https://api/telegram.org/bot${TOKEN}/sendMessage`;
  const success = document.getElementById('success');


  const [ uName, setUName] = useState('') 
  const [ uPhone, setUPhone] = useState('')

  const HandleClickName = (e) => {
    setUName(e.target.value)
  }

  const HandleClickPhone = (e) => {
    setUPhone(e.target.value)
  }


  
  const HandleSubmit = (e) => {
    e.preventDefault();

    // ${ this.name.value}

    // let message = `<b>Заявка с сайта!</b>\n`;
    // message += `<b>Отправитель: </b> ${uName}\n`;
    // message += `<b>Номер: </b> ${uPhone}`;

    const formattedMessage = `Ismi: ${uName}\nTelefon: ${uPhone}`

    axios.post(URL_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: formattedMessage
    })

    .then((res) => {
    setUName = "";
    setUPhone = "";
    success.innerHTML = "Сообщение отправлено!";
    success.style.display = "block";
    
    })

    .catch((err) => {
    
    console.warn(err);
    
    })
    .finaly(() => {
      console.log('конец')
    })
}

  return (
    <section className="contact">
        <div className="container contacts-container">
          <form className='form'>
            <div className="">
              <label className=''>name</label>
              <input type="text" name='name' value={uName} onChange={HandleClickName}/>
            </div>

            <div className="">
              <label>number</label>
              <input type="number" name='number' value={uPhone} onChange={HandleClickPhone}/>
            </div>

            <div id='success' role='alert' className=""></div>
            <button type='submit' onClick={HandleSubmit} >Submit</button>
          </form>
        </div>
    </section>
  )
}


{/* <div className="contact-items">
<label className='contact-name' data-aos="fade-up">Email *</label>
<input type="text" value={email} data-aos="fade-up" onChange={handleEmailChange} className='contact-input' />
</div> */}


export default Contact