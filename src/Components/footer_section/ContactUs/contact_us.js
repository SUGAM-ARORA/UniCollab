import React, { useContext, useState, useRef } from "react";
import { Link } from "react-router-dom";
import homeIcon from "../../../img/homeicon.png";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import "./contact_us.css";
import { ThemeContext } from "../../../App";

function ContactUs() {
  const { theme } = useContext(ThemeContext);
  // Individual state hooks for each input field
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [issue, setIssue] = useState("Bug");
  const [message, setMessage] = useState("");
  const [attachment, setAttachment] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setAttachment(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address.");
      return;
    } else if (name.length < 2 || name.length > 40) {
      toast.error("Name should be within 2 - 40 characters only.");
      return;
    }

    const sendButton = document.querySelector('button[type="submit"]');
    sendButton.disabled = true;
    sendButton.textContent = "Sending...";

    const serviceID = "service_va3y68b"; // Replace with your Email.js service ID
    const templateID = "template_7veyod4"; // Replace with your Email.js template ID
    const userID = "fA8eH-MWu5ilIq2Xl"; // Replace with your Email.js user ID

    const templateParams = {
      from_name: name,
      email_id: email,
      message: message,
    };

    const form = new FormData();
    form.append("name", name);
    form.append("email", email);
    form.append("issue", issue);
    form.append("message", message);

    // If there's an attachment, add it to the email's attachments
    if (attachment) {
      form.append("attachment", attachment, attachment.name);
    }

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(
        (result) => {
          // Reset the form after successful submission
          setName("");
          setEmail("");
          setIssue("Bug");
          setMessage("");
          setAttachment(null);
          fileInputRef.current.value = null; // Clear the file input
          toast.success("Sent Successfully!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again later.");
        }
      )
      .finally(() => {
        sendButton.disabled = false;
        sendButton.textContent = "Submit";
      });
  };

  return (
    <div className={`box ${theme}`}>
      <Link to="/">
        <img src={homeIcon} alt="Home" className="home-icon" />
      </Link>
      <div className="containerContact">
        <div className="general">
          <div className="box1">
            <h2>Business Hours</h2>
            <div className="contentInside">
              <div className="timing">
                <p>Monday to Friday</p>
                <p>9am-5pm IST</p>
              </div>
            </div>
          </div>
          <div className="box2">
            <h2>Contact Number</h2>
            <div className="contentInside">
              <a href="tel:1234567890">
                <span>Contact us at :</span> +91 1234567890
              </a>
            </div>
          </div>
          <div className="box3">
            <h2>Email</h2>
            <div className="contentInside">
              <a href="mailto:recipient@example.com">
                <span>Mail us at :</span> recipient@example.com
              </a>
            </div>
          </div>
          <div className="box4">
            <h2>Address</h2>
            <div className="contentInside">
              <div className="address">
                <p>123, Main Street</p>
                <p>City, State, Zip-Code</p>
                <p>Country</p>
              </div>
            </div>
          </div>
        </div>
        <div className="form">
          <h2>Facing any Issue? Help Us Improve!</h2>
          <p>
            Use the form below to get in touch. We attempt to respond to support
            requests within 1 business day.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="Name"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-field">
              <label htmlFor="issue">Issue Type</label>
              <select
                name="issue"
                id="issue"
                className="select-issue"
                value={issue}
                onChange={(e) => setIssue(e.target.value)}
                required
              >
                <option value="Bug">Bug</option>
                <option value="Suggestion">Suggestion</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="form-field">
              <label htmlFor="attachments">Any Attachments</label>
              <input
                type="file"
                id="attachments"
                name="attachments"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
        transition={Bounce}
      />
    </div>
  );
}

export default ContactUs;
