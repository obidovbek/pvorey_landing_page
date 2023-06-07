import React, { useState } from 'react'
import Alert from "react-bootstrap/Alert";

export default function Email() {

  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    comments: '',
  });
  const [alertClass, setAlertClass] = useState('');

  const handleInputChange = (event) => {
    const {name, value} = event.target;
    setContactForm({...contactForm, [name]: value});
  }
  const sendMessage = (event) => {
    event.preventDefault();
    const botToken = '5792306137:AAFVdMvdJu1Q6MzM5jmFs4Ae14K9toAEDIo';
    const chatId = '1521566761';

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: `Ism: ${contactForm.name}, email: ${contactForm.email}, tel: ${contactForm.phone}, izoh: ${contactForm.comments}` }),
    };
    fetch(url, requestOptions)
      .then(response => {
        if (response.ok) {
          setAlertClass('info');
          console.log('Message sent successfully!');
        } else {
          setAlertClass('danger');
          console.error(`Failed to send message. Error code: ${response.status}`);
        }
        setTimeout(()=>{setAlertClass('');},3000)
      })
      .catch(error => {
          setAlertClass('danger');
          setTimeout(()=>{setAlertClass('');},3000)
      });
  };

  return (
    <div>
        <Alert className={'alert-message ' + (alertClass === 'info' ? 'show-alert': '')} variant="info">Xabar muvaffaqiyatli yuborildi, Tez orada siz bilan bog‘lanamiz!</Alert>
        <Alert className={'alert-message ' + (alertClass === 'danger' ? 'show-alert': '')} variant="danger">Xabar yuborilmadi, yana bir bor urinib ko‘ring!</Alert>
      <section class="section" id="contact">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7">
              <div class="text-center mb-4">
                <p class="text-uppercase text-muted mb-2">Bog‘lanish uchun</p>
                <h3 class="text-uppercase">Aloqada bo‘ling</h3>
                <div class="title-border mt-3"></div>
                <p class="title-desc text-muted mt-3">Bizning jamoamiz sizga yordam berishdan xursand. qo'llab-quvvatlash shablonni to‘ldiring</p>
              </div>
            </div>

          </div>

          <div class="row justify-content-center">

            <div class="col-lg-9">
              <div class="custom-form">
                <form method="post" name="myForm" onSubmit={sendMessage}>
                  <p id="error-msg"></p>
                  <div class="row">
                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label for="name" class="form-label">Ism* :</label>
                        <input name="name" value={contactForm.name} onChange={handleInputChange} id="name" type="text" class="form-control" placeholder="Ismingizni kirgizing" />
                      </div>
                    </div>

                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label for="email" class="form-label">Email manzil* :</label>
                        <input type="email" value={contactForm.email} onChange={handleInputChange} class="form-control" name="email" id="email" placeholder="Email manzilingizni kirgizing" />
                      </div>
                    </div>

                    <div class="col-lg-6">
                      <div class="mb-3">
                        <label for="subject" class="form-label">Telefon raqamingiz* :</label>
                        <input type="text" value={contactForm.phone} onChange={handleInputChange} class="form-control" name="phone" id="subject" placeholder="Telefon raqamingiz" />
                      </div>
                    </div>

                    <div class="col-lg-12">
                      <div class="mb-3">
                        <label for="comments" class="form-label">Izohlar :</label>
                        <textarea value={contactForm.comments} onChange={handleInputChange} class="form-control" placeholder="Bu yerda fikr qoldiring" name="comments" id="comments"></textarea>
                      </div>
                    </div>


                  </div>


                  <div class="row">
                    <div class="col-lg-12">
                      <div class="mt-3 text-end">
                        <input type="submit" id="submit" name="send" class="submitBnt btn btn-primary" value="Xabar yuborish"/>
                          <div id="simple-msg"></div>
                      </div>

                    </div>

                  </div>

                </form>

              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
