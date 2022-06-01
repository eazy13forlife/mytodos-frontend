import React from "react";
import Modal from "../../components/Modal/Modal.js";

import ClickedTaskContent from "./ClickedTaskContent/ClickedTaskContent.js";

const ClickedTaskModal = ({ data, close }) => {
  return (
    <Modal width="60rem">
      <ClickedTaskContent data={data} close={close} />
    </Modal>
  );
};

export default ClickedTaskModal;
