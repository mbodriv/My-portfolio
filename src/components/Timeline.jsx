import React, {useState, useEffect} from "react";
import timelineData from "../data/timeline.json"

function Timeline() {
    const [sortedData, setSortedData] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
//const sorted = [...timelineData].sort((a,b) => { //the ... creates a copy of the timeline array. We do this because the sort() modified the original array. A and b are two entries compared at a time.
//const dateB = b.end === "Present" ? new Date() : new Date(b.end);
//return dateB - dateA;
//});
        setSortedData(timelineData);
    }, []);

    const visibleItems = showAll ? sortedData : sortedData.slice(0,4);
    return (
        <section className="timeline" id="timeline">
            <h2>My Journey</h2>
            <div className="timeline-card-container">
                {visibleItems.map((entry, index) => (
                    <div
                    id={entry?.id && `timeline-${entry.id}`}
                    className="timeline-card"
                    key={index}>
                    <div className={entry.type === "Work" ? "chip work" : "chip education"}>
                        {entry.type}
                    </div>
                    <div className="timeline-card-details">
                        <div className="card-logo">
                            <img src={entry.logo} alt={`${entry.title} logo`} />
                        </div>
                        <div className="card-content">
                            <h3>{entry.title}
                            </h3>
                            <h4>{entry.subtitle}</h4>
                            <p>{entry.description}</p>
                            <div className="timeline-dates">
                                {entry.start}-{entry.end}
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <button
                className="timeline-toggle"
                onClick={() => setShowAll(!showAll)}
            >
            {showAll ? "Show Less ↑" : "Show More ↓"}
            </button>
        </section>
    );
};

export default Timeline;