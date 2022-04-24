import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsPlusLg } from "react-icons/bs";
import { Link } from "react-router-dom";

import history from "../../history.js";
import { logoutUser } from "../../actions/";
import Modal from "../Modal/Modal.js";
import TaskForm from "../TaskForm/TaskForm.js";
import "./Header.scss";

const Header = () => {
  const dispatch = useDispatch();

  const [clickLogout, setClickLogout] = useState(false);

  const [showCreateModal, setShowCreateModal] = useState(false);

  const userInfo = useSelector((state) => {
    return state.userInfo;
  });
  const logoutErrorBackend = useSelector((state) => {
    return state.logoutErrorBackend;
  });

  useEffect(() => {
    if (clickLogout) {
      if (!userInfo) {
        history.push("/");
      } else {
        setClickLogout(false);
      }
    }
  }, [clickLogout]);

  const onLogoutClick = async () => {
    await dispatch(logoutUser());
    setClickLogout(true);
  };

  return (
    <header className="Header">
      <span className="color-light logo">myTodos</span>
      <nav className="Header__nav">
        <ul className="Header__nav-list">
          <li className="Header__item">
            <button
              className="Header__button"
              onClick={() => {
                setShowCreateModal(true);
              }}
            >
              <BsPlusLg className="Header__icon" />
            </button>
          </li>
          <li className="Header__item">
            <Link to="#" className="Header__link" onClick={onLogoutClick}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
      {showCreateModal && (
        <Modal>
          <TaskForm role="create" />
        </Modal>
      )}
    </header>
  );
};

export default Header;
