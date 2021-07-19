import React from "react";
import Question from "../Questions.jpg";


const HelpIcon = () => {
  return (
    <div class="dropdown">
      <button class="dropbtn">Additional Information</button>
      <div class="dropdown-content">
        <a href="#">&#128222;  1 (800) 827-5722</a>
        <a href="#"> 🧏🏽‍♀️ 1 (800) 877-8339</a>
        <a href="#">&#9200;  8 a.m to 8 p.m. (ET)</a>
        <a href="https://www.sba.gov/document/support-faq-regarding-covid-19-eidl">&#10067;  Frequently Asked Questions</a>
      </div>
    </div>
  );






  /*
  var m = "Questions? \n Phone: 1 (800) 827-5722 TTY/TDD: 1-800-877-8339 Mon–Sun, 8 a.m to 8 p.m. (ET)";
  console.log(m);
  return (
    <div 
        class="HelpIcon" 
        data-html="true" 
        data-tooltip={m}
        html={true}
    >
        <img 
            src={Question} 
            alt="Question Mark"
            height="50"
            width="50"
        />
    </div>
  );*/
};

export default HelpIcon;