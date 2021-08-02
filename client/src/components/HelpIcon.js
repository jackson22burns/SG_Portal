import React from "react";

const HelpIcon = () => {
  return (
    <div class="dropdown">
      <button class="dropbtn"> ? </button>
      <div class="dropdown-content">
        <a href="#">&#128222;  1 (800) 827-5722</a>
        <a href="#"> <i class="fa fa-tty" aria-hidden="true"></i>   1 (800) 877-8339</a>
        <a href="#">&#9200;  8 a.m to 8 p.m. (ET)</a>
        <a href="https://www.sba.gov/document/support-faq-regarding-covid-19-eidl">&#10067;  Frequently Asked Questions</a>
      </div>
    </div>
  );

};

export default HelpIcon;