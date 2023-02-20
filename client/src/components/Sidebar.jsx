import React, { useState } from "react";

const Sidebar = () => {
  const [wrapper, setWrapper] = useState(0);

  return (
    <div className="d-flex flex-column">
      <div className={wrapper === 1 ? 'wrapper' : ''} onClick={() => setWrapper(1)} >
        <img
          src={dashboard}
          alt="dashboard"
          className="my-4 sidebar-img sidebar-img-dashboard"
        />
      </div>
      <div className="wrapper">
        <img
          src={home}
          alt="home"
          className="my-4 sidebar-img sidebar-img-home"
        />
      </div>
    </div>
  );
};

export default Sidebar;
