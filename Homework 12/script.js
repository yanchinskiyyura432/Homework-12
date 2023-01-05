//task 1

// const { response } = require("express");

// const changeButton = () => {
//   let date = new Date();
//   let currentHour = date.getHours();
//   document.querySelector(
//     "button"
//   ).innerHTML = `Your vote is accepted: ${date.toDateString()} ${currentHour} : ${date.getMinutes()} : ${date.getSeconds()} `;
// };

// const vote = () => {
//   const ajaxRequest = new XMLHttpRequest();
//   ajaxRequest.open("GET", "index.html", true);
//   ajaxRequest.onreadystatechange = () => {
//     if (ajaxRequest.readyState != 4) return;
//     if (ajaxRequest.status != 200) {
//       alert("Error" + ajaxRequest.status + ": " + ajaxRequest.statusText);
//     } else {
//       changeButton();
//     }
//   };
//   ajaxRequest.send();
// };

// document.querySelector("button").addEventListener("click", vote);

//task 2

// const list = () => {
//   fetch("books.json")
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (authors) {
//       appendData(authors);
//     })
//     .catch(function (err) {
//       console.log("error: " + err);
//     });
//   function appendData(authors) {
//     document.body.innerHTML = `<ul></ul>`;
//     let mainContainer = document.querySelector("ul");
//     for (let i = 0; i < authors.length; i++) {
//       let li = document.createElement("li");
//       li.innerHTML = authors[i].author;
//       mainContainer.appendChild(li);
//     }
//   }
// };
// document.querySelector("button").addEventListener("click", list);
