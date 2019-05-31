import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3743.9608433972057!2d85.73384501423135!3d20.218948120306084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a8fa59ac3c81%3A0xc81fc475faa77274!2sC.+V.+Raman+College+of+Engineering!5e0!3m2!1sen!2sin!4v1549864385491"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
