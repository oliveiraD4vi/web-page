import { useState } from "react";

import "./modal.css";

const Modal = ({ children, title, btn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={handleToggle}>{btn ? btn : "Open Modal"}</button>
      {isOpen && (
        <div className="wrapper">
          <div className="modal">
            <div className="body">
              <div className="header">
                <p>{title}</p>
                <button onClick={handleToggle} className="close-btn">
                  X
                </button>
              </div>
              <div className="content">{children}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
