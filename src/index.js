import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
axios.defaults.withCredentials = true;
// Contact
// const scriptURL = "https://script.google.com/macros/s/AKfycbxDhJp2Kya9dSPXVhpkStDYNhWums6uNMrB_ssrOeX1KkNg2B_3S0-7sFejJ9xMjqaj/exec";
// const form = document.forms["messege-to-form"];
// const btnKirim = document.querySelector(".btn-kirim");
// const btnLoading = document.querySelector(".btn-loading");
// const myAlert = document.querySelector(".my-alert");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   btnLoading.classList.toggle("d-none");
//   btnKirim.classList.toggle("d-none");
//   fetch(scriptURL, { method: "POST", body: new FormData(form) })
//     .then((response) => {
//       btnLoading.classList.toggle("d-none");
//       btnKirim.classList.toggle("d-none");

//       // showing alert
//       myAlert.classList.toggle("d-none");

//       // reset
//       form.reset();
//       console.log("Success!", response);
//     })
//     .catch((error) => console.error("Error!", error.message));
// });
// Akhir Contact
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
