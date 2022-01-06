import './StyledForm.css'
import { useState } from 'react'

//   copié l'id similaire a celui ci a partir du compte emailjs dans l'index html à l'interieur du body

// <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
//   <script type="text/javascript">
//   (function() {
//   emailjs.init("user_W9InHKJKaOOHnlurTxni2");
//   })();
//   </script>

export default function StyledForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
      e.preventDefault();
  
      // changer le template id en fonction du template id de emailjs voulu

      sendFeedback("template_od2uhc6", {
        name,
        email,
        message,
      });
    };

    const sendFeedback = (templateId, variables) => {

      // changer l'id du service en fonction du compte emailjs

      window.emailjs
        .send("service_7i5b1kj", templateId, variables)
        .then((res) => {
          console.log('success !');
          setName("");
          setEmail("");
          setMessage("");
          document.querySelector('.form-message').innerHTML =
          "Votre email à bien été envoyé !";
        })
        .catch(
          (err) =>
            document.querySelector('.form-message').innerHTML =
              "Une erreur s'est produite, veuillez réessayer.")
    };
  

    return (
        <div className="styled-form-container">
            <div className="styled-form-text-container">
                <section className="form-container">
                    <section id="contact">
                        <div className="container">
                        <div className="heading-wrapper">
                            <div className="heading">
                            <p className="contact-title">
                            Lorem Ipsum <br />
                             Lorem Ipsum
                            </p>
                            <p className="separator" />
                            <p className="subtitle">
                            Lorem Ipsum {''}
                                <span className="mail">
                                florent.
                                <i className="fas fa-at at" />
                                desmarets
                                <i className="fas fa-circle dot" />
                                @gmail.com
                                </span>
                                :
                            </p>
                            </div>
                        </div>
                        <form id="contact-form" onSubmit={handleSubmit}>
                            <input placeholder="Lorem Ipsum"  name="name" type="text" required htmlFor="name" value={name} onChange={e => setName(e.target.value)}/>
                            <input placeholder="Lorem Ipsum" name="email" type="email" required htmlFor="email" value={email} onChange={e => setEmail(e.target.value)}/>
                            <textarea placeholder="Lorem Ipsum" type="text" name="message" htmlFor="message" value={message} onChange={e => setMessage(e.target.value)} />
                            <input className="button" id="submit" value="Lorem Ipsum"  type="submit" />
                            <div className="form-message"></div>
                        </form>
                        </div>
                    </section>
                </section>
            </div>
        </div>
    )

}