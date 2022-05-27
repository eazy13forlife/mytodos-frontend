import React from "react";
import { Link } from "react-router-dom";

import ErrorBox from "../ErrorBox/ErrorBox.js";
import useLogout from "./useLogout.js";

const LogoutButton = () => {
  const [onLogoutClickMemo, showErrorBox, logoutErrorBackend] = useLogout();

  return (
    <>
      <Link to="#" className="Header__link" onClick={onLogoutClickMemo}>
        Logout
      </Link>

      {showErrorBox && <ErrorBox message={logoutErrorBackend} />}
    </>
  );
};

export default LogoutButton;
