import React, {useEffect, useState} from "react";
import { AiFillHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import { FaTools, FaProjectDiagram} from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import aboutData from "../data/about.json";

function Sidebar() {

    const [activeSection, setActiveSection] = useState("hero");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
//this function finds all <section> elements on the page and stores them. This is how the sidebar knows which sections exist to watch.
        const sections = document.querySelectorAll("section");

 //IntersectionObserver is a browser tool that watches elements and tells you when they appear on screen.
 //entries are the list of sections being watched
 //entry.Isintersecting means "if sectionn is visible on screen then update the active section to whichever one is currently visible"
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting){
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {threshold:0.5}
        )
        sections.forEach((section)=> observer.observe(section));
        return () => observer.disconnect();
    }, [])

    return (
        <>
        <button
            className="hamburger"
            onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? "✕" : "☰"}
        </button>

        <nav className={`sidebar ${isOpen ? "open" : ""}`}>
            <div className="sidebar-logo">
                <img src={aboutData.logo} alt="Logo" />
            </div>

            <ul>
                <li className={activeSection === "hero" ? "active" : ""}>
                    <a href="#hero" onClick={() => setIsOpen(false)}><AiFillHome /><span>Home</span></a>
                </li>

                <li className={activeSection === "about" ? "active" : ""}>
                    <a href="#about" onClick={() => setIsOpen(false)}><FcAbout /><span>About</span></a>
                </li>

                <li className={activeSection === "skills" ? "active" : ""}>
                    <a href="#skills" onClick={() => setIsOpen(false)}><FaTools /> <span>Skills</span></a>
                </li>
                <li className={activeSection === "projects" ? "active" : ""}>
                    <a href="#projects" onClick={() => setIsOpen(false)}><FaProjectDiagram /> <span>Projects</span></a>
                </li>
                <li className={activeSection === "timeline" ? "active" : ""}>
                     <a href="#timeline" onClick={() => setIsOpen(false)}><MdOutlineWork /> <span>Timeline</span></a>
                </li>
                <li className={activeSection === "contact" ? "active" : ""}>
                    <a href="#contact" onClick={() => setIsOpen(false)}><IoMdContact /> <span>Contact</span></a>
                </li>
            </ul>
        </nav>
        </>

    )

}

export default Sidebar ;
