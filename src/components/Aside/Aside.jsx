import React from "react";
import "./Aside.css";
import SubReddits from "../../features/SubReddits/SubReddits";

const Aside = () => {
  return (
    <aside>
      <div className="search">
        <input className="search-input" placeholder="Search" />
      </div>
      <SubReddits />
    </aside>
  );
};

export default Aside;
