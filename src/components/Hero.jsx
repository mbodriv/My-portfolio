import React from "react";
import { TypeAnimation } from "react-type-animation";
import {motion} from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import aboutData from "../data/about.json";

function Hero () {
    return (

    <section id="hero" className="hero-section">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y:0}}
            transition={{ duration: 0.8}}
            className="hero-content"
        >
            <TypeAnimation
            sequence={[
                "Hey, I'm Maria Bodero 👋",
                2000,
                "Hola, Soy Maria Bodero 👋",
                2000
            ]}
            wrapper="h1"
            speed={50}
            repeat={Infinity}
            />
        <p className="hero-subtitle">{aboutData.subtitle}</p>

        <div className="hero-social">
            <a href={aboutData.socialLinks.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="social-icon linkedin">
                <FaLinkedin />
            </a>
            <a href={aboutData.socialLinks.github.url}
                target="_blank"
                rel="noreferrer"
                className="social-icon github">
                <FaGithub />
            </a>
            <a href={`mailto:${aboutData.email}`}
                className="social-icon email">
                <MdEmail />
            </a>
        </div>

        <div className="hero-buttons">
            <a href="#contact" className="btn-primary">Contact Me</a>
            <a href={aboutData.resume}
            download className="btn-secondary">Download CV</a>
        </div>
    </motion.div>
    </section>
    )   
}

export default Hero;