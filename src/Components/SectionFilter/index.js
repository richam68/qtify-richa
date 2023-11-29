import React, { useState } from "react";
import Carousel from "../Carousel";
import "./sectionFilter.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const SectionFilter = ({ title, data, genre, executeFilterSongs }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (e, newValue) => {
    executeFilterSongs(genre[newValue].key);
    setSelectedTab(newValue);
  };
  return (
    <div className="section">
      <div>
        <h1 className="title">{title}</h1>
      </div>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        TabIndicatorProps={{
          style: { backgroundColor: "var(--css-primary)" },
        }}
      >
        {genre.map((item) => (
          <Tab key={item.key} label={item.label} className="tab" />
        ))}
      </Tabs>

      <Carousel data={data} />
    </div>
  );
};

export default SectionFilter;
