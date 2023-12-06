import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTheme } from "../redux/appSlice";

function NightMode() {
  const theme = useSelector((state) => state.app.theme);
  const storageTheme = localStorage.getItem("theme");
  const dispatch = useDispatch();
  useEffect(() => {
    // if there is a theme in local storage
    if (storageTheme) {
      localStorage.setItem("theme", storageTheme);
      dispatch(setTheme(storageTheme));
      if (storageTheme === "dark") {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    }
    // if there is no theme in local storage set dark theme
    else {
      localStorage.setItem("theme", "dark");
      dispatch(setTheme(storageTheme("dark")));
      document.body.classList.add("dark-mode");
    }
  });

  function toggleDarkMode() {
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      dispatch(setTheme("light"));
    } else {
      localStorage.setItem("theme", "dark");
      dispatch(setTheme("dark"));
    }

    document.body.classList.toggle("dark-mode");
  }
  return (
    <>
      <button
        id="themeBtn"
        onClick={toggleDarkMode}
        style={{ width: "150px" }}
        className={`btn z-3    ms-auto fixed-top  my-4 mx-1 ${
          theme === "dark" ? "btn-light  " : "btn-dark"
        }`}
      >
        {" "}
        {theme === "dark" ? (
          <i className="bi mx-2 text-dark bi-brightness-high"></i>
        ) : (
          <i className="bi mx-2 text-white bi-moon"></i>
        )}
        <span className="">
          {theme === "dark" ? "Light Mode" : "Dark Mode"}
        </span>
      </button>
    </>
  );
}

export default NightMode;
