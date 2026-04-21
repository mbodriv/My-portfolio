import React from "react";
import aboutData from "../data/about.json"

//dangerouslySetInnerHTML displays the text as HTML and not plain text. So the link in about.json becomes a real clickable link.
function About() {

    return(
        <section className="about" id="about">
            <h2> More About Me</h2>

            <p>{aboutData.description}</p>
            
            <div className="about-cards">
                <div className="about-card">
                    <span className="about-card-icon">💼</span>
                    <h3>Finance & Accounting</h3>
                    <p>5+ years accross Finance and Accounting roles</p>
                </div>

                <div className="about-card">
                    <span className="about-card-icon">💻</span>
                    <h3>Technology</h3>
                    <p>Building finance automation tools that solve real problems</p>
                </div>
            </div>
            
            <p dangerouslySetInnerHTML={{ __html: aboutData.education}}/>
            <br />
            <p dangerouslySetInnerHTML={{ __html: aboutData.beliefAndGoal}}/>
        </section>
    );
};

export default About;