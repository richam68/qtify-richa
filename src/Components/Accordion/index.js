import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from "axios";
import { useEffect, useState } from "react";
import "./accordion.css";

let ENDPOINT = "https://qtify-backend-labs.crio.do/";

export default function BasicAccordion() {
  const [frequentlyQues, setFrequentlyQues] = useState([]);

  useEffect(() => {
    faqApi();
  }, []);
  
  const faqApi = async () => {
    try {
      const response = await axios.get(`${ENDPOINT}faq`);
      setFrequentlyQues(response.data.data);
    } catch (error) {
      console.log("Error in frequently asked question", error);
    }
  };
  return (
    <div className="accordion-container">
      <div>
        <h4>FAQs</h4>

        {frequentlyQues.map((items, index) => (
          <Accordion
            key={index}
            style={{
              backgroundColor: "#121212",
              maxWidth: 1000,
              border: "1px solid",
              borderColor: "#ffffff",
              padding: "2px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="#34c94b" />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              style={{ color: "white" }}
            >
              <Typography>{items.question}</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ backgroundColor: "white" }}>
              <Typography>{items.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
