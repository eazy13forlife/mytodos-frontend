import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

import debounced from "../../helperFunctions/debounce.js";
import { logoutUser } from "../../actions";

let timerId;

const useLogout = () => {
  const dispatch = useDispatch();

  const [clickLogout, setClickLogout] = useState(false);

  const [showErrorBox, setShowErrorBox] = useState(false);

  const logoutErrorBackend = useSelector((state) => {
    return state.logoutErrorBackend;
  });

  useEffect(() => {
    if (clickLogout) {
      clearTimeout(timerId);

      setClickLogout(false);

      setShowErrorBox(true);

      timerId = setTimeout(() => {
        setShowErrorBox(false);
      }, 5000);
    }
  }, [clickLogout]);

  const onLogoutClick = async () => {
    const response = await dispatch(logoutUser());

    //if there is no error we go to "/" page before the setClickLogout code below will run. In that case, we will get an error saying that we can't perform a  react state update on an unmounted component
    if (response === "error") {
      setClickLogout(true);
    }
  };

  //user has to wait 1000ms before clicking logout, if button has been clicked already
  const onLogoutClickMemo = useMemo(() => {
    return debounced(onLogoutClick, 1000);
  }, []);

  return [onLogoutClickMemo, showErrorBox, logoutErrorBackend];
};

export default useLogout;
