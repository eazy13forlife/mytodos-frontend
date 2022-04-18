import React from "react";

import Header from "../../components/Header/Header.js";
import Sidebar from "../../components/Sidebar/Sidebar.js";

const Inbox = () => {
  return (
    <div className="Inbox">
      <Header />
      <Sidebar />
      <main className="Inbox__content">
        <p>hey</p>
      </main>
    </div>
  );
};

export default Inbox;
