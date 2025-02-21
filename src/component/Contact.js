import axios from "axios";
import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = formData;

    if (!name) {
      alert("Write name");
    } else if (!email) {
      alert("Write email");
    } else if (!phone) {
      alert("Write phone");
    } else if (!subject) {
      alert("Write subject");
    } else if (!message) {
      alert("Write message");
    } else {
      console.log(formData);
      // window.alert("Send successfully.");
      const data_api = "http://localhost:3213/contactmessage";
      axios.post(data_api, formData)
        .then(res => {
          console.log("Data submitted");
          setSuccessMessage("Form submitted successfully!");
        })
        .catch(error => {
          console.error("There was an error sending the message!", error);
          alert("Error submitting form");
        });
    }
  };

  return (
    <div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27920.32615554313!2d79.37365812762278!3d28.986162881878546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a07fee6824ceb9%3A0x2afe625a8db34866!2sSysnix+Technologies!5e0!3m2!1sen!2sin!4v1510597753788"
          width="100%"
          height="250"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen
          title="Sysnix Technologies Location"
        ></iframe>
      </div>
      <div className="wrapper clearfix">
        <section className="padding paddv-80">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="section-title">Contact Us</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                {successMessage ? (
                  <div>
                    <h1>Thank You!</h1>
                    <p>You are very important to us, all information received will always remain confidential. We will contact you as soon as we review your message.</p>
                  </div>
                ) : (
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="name"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Your name *"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email address *"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Phone Number *"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Your Subject *"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Type your message"
                            className="form-control"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <button type="submit" className="devbtn">
                          Send us message
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
              <div className="col-md-6">
                <div className="contact-block">
                  <h2>Call us</h2>
                  <ul>
                    <li>
                      <h2 style={{position: "relative"}}>
                        <i className="fa fa-phone"></i>Sysnix Automation:
                        <span className="value" style={{position: "absolute",right: "-10px"}}>
                          +91-7466076666
                        </span>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div className="contact-block">
                  <h2>Email Us</h2>
                  <ul>
                    <li>
                      <h2>
                        <i className="fa fa-envelope"></i>Project Support:
                        <span className="value">
                          info@Sysnixautomation.com
                        </span>
                      </h2>
                    </li>
                  </ul>
                </div>
                <div className="contact-block">
                  <h2>Address</h2>
                  <ul>
                    <li>
                      <h2>
                        <i className="fa fa-location-arrow"></i>MAIN OFFICE:
                        <span className="value">
                          D1, D2 Gangwar Tower, Adarsh Colony Rudrapur <br />
                          Dist. U.S.Nagar (UK)
                        </span>
                      </h2>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
