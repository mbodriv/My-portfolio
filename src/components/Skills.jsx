//useref is used to store something that I can later on use.In our example, it stores a reference to the HTML itself
import { useEffect, useState, useRef } from "react";
import skillsData from "../data/skills.json"

//useRef tells were the actual button element is (skills, stacks..)
//useEffect measures it (offsetWidht, offsetLeft)
//useState (indicatoryStyle) stores those measurements. It starts with empty values {}.
//indicator <div> uses them to position itself
const Skills = () => {
    const [activeTab, setActiveTab] = useState("Skills");
    const [indicatorStyle, setIndicatorStyle]=useState({});
    const tabRefs = useRef({});

    useEffect(() =>{
        const tab = tabRefs.current[activeTab]; //grabs the actual HTML button element for the current tab
        if (tab) {
            setIndicatorStyle ({
                width: `${tab.offsetWidth - 25}px`, //the button's actual width. the -25 is just a small adjustment
                left: `${tab.offsetLeft}px`,
            });
        }
    }, [activeTab]); //rerun this everytime the active tab changes

    return(
        <section className="skills" id="skills">
            <h2>Skills & Tools</h2>
            <div className="tabs">
                {Object.keys(skillsData).map((tab) => ( //returns an array for the categories and maps loops through each one and creates a button for it
                    <button
                    key={tab}
                    ref={(el) => (tabRefs.current[tab] = el)} //stores a reference to this button element in our tabRefs box so we can measure it later
                    className={`tab ${activeTab === tab ? "active": ""}`}
                    onClick={() => setActiveTab(tab)}>
                        {tab}
                    </button>
                ))}
                <div className="active-tab-indicator" style={indicatorStyle}>
                    {activeTab}
                </div>
            </div>
            <div className="grid">
                {skillsData[activeTab].map(({ name, icon}) => ( //each skills renders a clickable card
                    <div
                    key={name}
                    className="card"
                    target="_blank"
                    rel="noopener noreferrer">
                        <span className="icon">{icon}</span>
                        <span className="label">{name}</span>
                    </div>
                ))}
            </div>
        </section>

    )
}

export default Skills;