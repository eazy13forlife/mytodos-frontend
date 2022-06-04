import React, { useState } from "react";

import useWindowWidth from "../../../hooks/useWindowWidth.js";
import useDelayMount from "../../../hooks/useDelayUnmount.js";
import SidebarPage from "../../SidebarPage/SidebarPage.js";
import Sidebar from "../..//../components/Sidebar/Sidebar.js";

const useRenderSidebar = () => {
  const windowWidth = useWindowWidth();

  const [showSidebarPage, setShowSidebarPage] = useState(false);

  const mountSidebarPage = useDelayMount(showSidebarPage, 520);

  const renderSidebar = () => {
    if (windowWidth > 768) {
      return <Sidebar />;
    }

    if (mountSidebarPage) {
      return <SidebarPage mountIndicator={showSidebarPage} />;
    }

    return null;
  };

  return { renderSidebar, showSidebarPage, setShowSidebarPage };
};

export default useRenderSidebar;
