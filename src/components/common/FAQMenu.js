import React, { useState } from "react";
import FAQItem from "./FAQItem";
import "./FAQ.css";
import "./HomePage.css";

const FAQMenu = () => {
  const [currentlyActive, setCurrentlyActive] = useState(1);

  const handleAccordionClick = (newActiveAccordion) => {
    setCurrentlyActive(
      newActiveAccordion === currentlyActive ? null : newActiveAccordion
    );
    console.log(`currently active item: ${currentlyActive}`);
    console.log(
      `newly active item: ${newActiveAccordion} previous active item ${currentlyActive}`
    );
  };

  return (
    <div className="accordion-menu" id = "FAQs">
      <h5 className="title font-weight-bold text-warning" style = {{fontSize:"30px"}}>FAQ'S - Frequently Asked Questions</h5>
      <div className="accordion-items">
        <FAQItem
          title="How do I create an account on the education platform?"
          content="To create an account, click on the Sign Up button on the homepage. Fill in the required information, and you'll be registered as a student."
          isActive={currentlyActive === 1}
          onClick={() => handleAccordionClick(1)}
        />
        <FAQItem
          title="How can I enroll in a course?"
          content="After logging in, browse through the available courses. Click on the course you're interested in, and there should be an "Enroll" button. Follow the fields to complete the enrollment process."
          isActive={currentlyActive === 2}
          onClick={() => handleAccordionClick(2)}
        />
        <FAQItem
          title="What happens after I enroll in a course?"
          content="Once enrolled, you'll gain access to the course materials. You can start learning at your own pace and engage with the course content."
          isActive={currentlyActive === 3}
          onClick={() => handleAccordionClick(3)}
        />
      </div>
    </div>
  );
};

export default FAQMenu;
