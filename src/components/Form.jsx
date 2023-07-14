import { useRef } from 'react';
import emailjs from '@emailjs/browser'

export default function Form() {
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0k7yua7', 'template_0qcmeep', form.current, 'EA-3RrG_w1F1m5nHq')
      .then((result) => {
          console.log(result.text, "Success");
      }, (error) => {
          console.log(error.text, "error");
      });
  };

    return (
        <section id="contact_form">
            <h1>CONTACT FORM</h1>
            <form ref={form} onSubmit={sendEmail}>
                <input name='name' type="text" placeholder='Name' autoComplete="name" required />
                <input name='email' type="email" placeholder='Email' autoComplete="email" required />
                <textarea name="message" id="message" cols="30" rows="10" placeholder='Type message' required></textarea>
                <button>Send</button>
            </form>
        </section>
    )
}