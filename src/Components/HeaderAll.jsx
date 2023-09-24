import React from "react";

const HeaderAll = ({ children }) => {
  return (
    <div className="Header-all-bg">
      <div className="container" data-aos="fade-right">
        {children}
      </div>
    </div>
  );
};

export default HeaderAll;
