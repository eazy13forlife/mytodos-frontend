import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import history from "../../history.js";
import { logoutUser } from "../../actions/";
import ErrorBox from "../ErrorBox/ErrorBox.js";
import debounced from "../../helperFunctions/debounce.js";

let timerId;

const LogoutButton = () => {
  const dispatch = useDispatch();

  const [clickLogout, setClickLogout] = useState(false);

  const [showErrorBox, setShowErrorBox] = useState(false);

  const logoutErrorBackend = useSelector((state) => {
    return state.logoutErrorBackend;
  });

  useEffect(() => {
    if (clickLogout) {
      if (!logoutErrorBackend) {
        history.push("/");
      } else {
        clearTimeout(timerId);

        setClickLogout(false);

        setShowErrorBox(true);

        timerId = setTimeout(() => {
          setShowErrorBox(false);
        }, 5000);
      }
    }
  }, [clickLogout]);

  const onLogoutClick = async () => {
    await dispatch(logoutUser());

    setClickLogout(true);
  };

  const onLogoutClickMemo = useMemo(() => {
    return debounced(onLogoutClick, 1000);
  }, []);

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
