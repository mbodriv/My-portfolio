import React from "react";
import {QRCodeSVG} from "qrcode.react";
import {FaLinkedin, FaGithub, FaWhatsapp} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import aboutData from "../data/about.json";

const Contact =() => {
    return(
        <section className="contact" id="contact">
            <h2>Get In Touch</h2>
            <p className="contact-intro">Got a question or want to collaborate? I'd love to hear from you.</p>

            <div className="contact-container">
                <div className="contact-links">
                    <a href={`mailto:${aboutData.email}`}
                    className="contact-item">
                        <MdEmail className="contact-icon email"/>
                        {aboutData.email}
                        </a>
                    {/* <a href={aboutData.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-item">
                        <FaWhatsapp className="contact-icon whatsapp" />
                        Start a Chat!
                    </a> */}
                    <div className="contact-divider"> - Or find me on - </div>
                    <a href={aboutData.socialLinks.linkedin.url}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-item">
                        <FaLinkedin className= "contact-icon linkedin" />
                        LinkedIn
                    </a>

                    <a href={aboutData.socialLinks.github.url}
                    target="_blank"
                    rel="noreferrer"
                    className="contact-item"
                    >
                        <FaGithub className="contact-icon github" />
                        GitHub
                    </a>
                </div>
                <div className="contact-qr">
                    <QRCodeSVG value={aboutData.vcard} size={180}/>
                    <p>Scan to view my contact details</p>
                </div>
            </div>
        </section>
    );
};
export default Contact;