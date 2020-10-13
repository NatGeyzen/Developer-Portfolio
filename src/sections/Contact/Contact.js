import React from 'react';
import { MailOutlined, GithubOutlined, FileDoneOutlined } from '@ant-design/icons';
import './Contact.css';

const Contact = () => {
    return (
        <section className="page-section">
            {/* <h2 className="page-section-title">Contact</h2> */}
            <div className="status">
                <span>Currently open to new opportunities</span>
            </div>
            
            <div className="contact">
                <div className="contact-type-container">
                    <a href = "mailto: nat.geyzen.tech@outlook.com">
                        <MailOutlined className="contact-icon" />   
                    </a>
                    <p className="contact-type-description">Shoot me a message</p>
                </div>
                <div className="contact-type-container">
                    <a href="https://github.com/NatGeyzen?tab=repositories" target="_blank" rel="noopener noreferrer">
                        <GithubOutlined  className="contact-icon" /> 
                    </a>
                    <p className="contact-type-description">Find me on Github</p>
                </div>
                <div className="contact-type-container">
                    <a href="/assets/resume.pdf" download>
                        <FileDoneOutlined  className="contact-icon" /> 
                    </a>
                    <p className="contact-type-description">View resume</p>
                </div>
            </div>

            <footer className="footer">
                &copy; 2020 Nat Geyzen
            </footer>
            
        </section>
    )
};

export default Contact;