
import { useRef } from 'react';
import {sendForm} from '@emailjs/browser';

function ContactSection() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        
            sendForm(
                import.meta.env.VITE_EMAIL_SERVICE_ID,
                import.meta.env.VITE_EMAIL_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAIL_USER_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("Message Sent, We will get back to you shortly"); 
                },
                (error) => {
                    console.log(error.text);
                    alert("An error occurred, Please try again");

                    form.current.reset();
                }
            );
       


        };


    return (
        <>
        <section id="contact" className="container">
            <div className="d-flex align-items-center py-4 container">

                <main className="form-signin col-12 colsm-6 text-center w-100 m-auto">
                    <form ref={form} onSubmit={sendEmail} >
                        <h1 id="contact" className="text-center display-6 fw-bold text-body-emphasis lh-1 mb-5">Get in contact with us....</h1>
                        <h1 className="h3 mb-3 fw-normal">SEND US A MESSAGE</h1>
                        <div className="form-floating my-4 border-outline rounded">
                            <input type="user_email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating my-4 border-outline rounded">
                            <textarea name="message" rows="4" className="h-50 form-control" id="floatingPassword" placeholder="Message" required></textarea>
                            <label htmlFor="floatingPassword">Message</label>
                        </div>

                        <button type="submit" className="btn btn-outline-dark btn-lg px-4 me-md-2">Contact</button>
                  
                    </form>
                </main>
                <span id="PING_IFRAME_FORM_DETECTION" style={{display: 'none'}}></span></div>
        </section>
        </>
    );
}

export default ContactSection;