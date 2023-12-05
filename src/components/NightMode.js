import React from "react";

function NightMode() {
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  return (
    <button
      onClick={toggleDarkMode}
      className="btn btn-dark btn-sm float-end"
    ></button>
  );
}

export default NightMode;
