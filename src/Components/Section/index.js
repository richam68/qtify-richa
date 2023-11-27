import React, { useState } from "react";
import Card from "../Cards";
import Carousel from "../Carousel";
import "./section.css";
import Tabs from "../Tabs";

export default function Section({
  title,
  data,
  type,
  filteredDataValues,
  value = 0,
  handleChange = null,
}) {
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

      {type === "songs" ? (
        <Tabs value={value} handleChange={handleChange} />
      ) : null}

      {!isCollapse ? (
        <Carousel data={data} />
      ) : (
        <div className="card-container">
          {data.map((cardItems, index) => {
            return (
              <Card
                key={index}
                imageSrc={cardItems.image}
                follows ={cardItems.follows ? cardItems.follows : cardItems.likes} 
                title={cardItems.title}
                type={type}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
