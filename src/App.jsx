import React from "react";
import {HelmetProvider, Helmet} from "react-helmet-async";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Sidebar from "./components/Sidebar";
import ThemeToggle from "./components/ThemeToggle";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import "./App.css";
import "./Footer.css";
import "./Section.css";
import "./Sidebar.css";
import "./Skills.css";
import "./Timeline.css";
import "./Contact.css";
import "./Projects.css";
import "./About.css";

function App() {
  return (
  <HelmetProvider>
    <div className="App">
      <Helmet>
        <title> Maria Bodero | Finance & Technology</title>
        <meta name="description"
        content="Maria's portfolio showcasing finance expertise, data analysis and full stack development projects"/>
        <meta name="keywords" content="developer, finance, management accounting, software, projects, Github, Python, Brisbane"/>
      </Helmet>
      <ThemeToggle/>
      <Sidebar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  </HelmetProvider>
  )
}

export default App;