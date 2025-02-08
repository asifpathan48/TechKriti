import React from 'react'
import './Feedback.css';
import Swal from 'sweetalert2'


function Feedback() {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e149277c-1d14-493c-887e-0ff221993a62");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      };

  return (
    <section className="contact">
        <form onSubmit={onSubmit}>
            <h2>FeedBack Form</h2>
            <div className="input-box">
                <label>Full Name</label>
                <input type="text" className="field" placeholder='Enter your name' name='name' required />
            </div>
            <div className="input-box">
                <label>Email Address</label>
                <input type="email" className="field" placeholder='Enter your email' name='email' required />
            </div>
            <div className="input-box">
                <label>Your Feedback</label>
                <textarea name="message" id="" className="field mess" placeholder='Enter your feedback' required />
            </div>
            <button type="submit">Send Message</button>
        </form>
    </section>
  )
}

export default Feedback
