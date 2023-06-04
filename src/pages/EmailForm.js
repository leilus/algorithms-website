import { useState } from "react";
import { send } from "emailjs-com";
import './EmailForm.css';

const EmailForm = () => {
    const [toMessage, setToMessage] = useState();
    const [toSend, setToSend] = useState({
        from_name: '',
        reply_to: '',
        message: '',
    });

    const onSubmit = (e) =>{
        e.preventDefault();
        send(
            'service_k1xs48h',
            'template_azevl5f',
            toSend,
            'dH7IbiyshGtQWLGhn'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setToMessage("Wiadomość została wysłana pomyślnie");
        })
        .catch((err) => {
            console.log('FAILED..', err);
            setToMessage("Nie udało się wysłać wiadomości, spróbuj ponownie");
        })
    }

    const handleChange = (e) => {
        setToSend({...toSend, [e.target.name]: e.target.value});
    }

    return ( 
    <div className="EmailForm">
        <div className="template">
        <form onSubmit={onSubmit}>
            <p>Your name</p>
            <input
            type="text"
            name="from_name"
            placeholder="from_name"
            value={toSend.from_name}
            onChange={handleChange}
            />
              <p>Your e-mail</p>
            <input
            type="text"
            name="reply_to"
            placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
            />
           
            <p>Message</p>
             <input
            type="text"
            name="message"
            placeholder="message"
            value={toSend.message}
            onChange={handleChange}
            />
           <button type="submit">Submit</button>
            {toMessage}
        </form>
        </div>
    </div> );
}
 
export default EmailForm;