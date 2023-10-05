import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRecycle } from "@fortawesome/free-solid-svg-icons";

const Button = () => {
  function handleResize(e) {
    if (e.target.parentElement.nextSibling.style.display === "none") {
      e.target.parentElement.nextSibling.style.display = "inLine";
    } else {
      e.target.parentElement.nextSibling.style.display = "none";
    }
  }

  return (
    <button onClick={handleResize}>
      <FontAwesomeIcon icon={faRecycle} size="lg" />
    </button>
  );
};

export default Button;
