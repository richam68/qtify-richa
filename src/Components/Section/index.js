import React, { useState } from "react";
import Card from "../Cards";
import Carousel from "../Carousel"
import "./section.css";
export default function Section({ title, data }) {
  const [isCollapse, setIsCollapse] = useState(false);

  const handleShowHide = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <div className="section">
      <div className="section-header">
        <h1 className="title">{title}</h1>
        {isCollapse ? (
          <button onClick={handleShowHide} className="section-toggle-btn">
            Collapse
          </button>
        ) : (
          <button onClick={handleShowHide} className="section-toggle-btn">
            Show All
          </button>
        )}
      </div>

      {!isCollapse ? <Carousel data={data}/> : 
      <div className="card-container">
        {data.map((cardItems, index) => (
          <Card
            key={index}
            imageSrc={cardItems.image}
            follows={cardItems.follows}
            title={cardItems.title}
          />
        ))}
      </div>
}

    </div>
  );
}
