/* basic promise fetch*/

import "./style.css";

// let promise = fetch("https://jsonplaceholder.typicode.com/users");

// promise
//   .then((response) => response.json())
//   .then((data) => {
//     let users = data;
//     renderUsers(users);
//     console.log(users);
//   })
//   .catch((error) => {
//     console.log(`there was an error fetching data`, error);
//   });

// function renderUsers(users) {
//   const container = document.querySelector("#app");

//   container.innerHTML = users
//     .map((item) => {
//       const { name, address, email, id } = item;
//       return `
//               <div id="${id}" class="card">
//                   <div class="name-container">
//                    <p>${id}</p>
//                    <h1>${name}</h1>
//                   </div>
//                 <p>${address.city}</p>
//                 <h2>${email}</h2>
//               </div>`;
//     })
//     .join("");
// }

/* async await + module aproach */

// import { fetchData } from "./fetchData";

// fetchData()
//   .then(renderWeather)
//   .catch((e) => {
//     console.error(e);
//     alert("Error getting weather.");
//   });

// function renderWeather({ parsedData }) {
//   const container = document.querySelector("#app");

//   //console.log(parsedData);
//   container.innerHTML = parsedData
//     .map((item, index) => {
//       const { firstName: name, emailAddress: mail } = item;
//       return `
//               <div id="${index}" class="card">
//                   <div class="name-container">
//                     <p>${index}</p>
//                     <h1>${name}</h1>
//                   </div>
//                 <h2>${mail}</h2>
//               </div>`;
//     })
//     .join("");
// }

/* AXIOS */

import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com/users";

async function getUsers() {
  try {
    const response = await axios.get(API_URL);
    console.log(response);

    return {
      parsedData: parseAPI(response),
    };
  } catch (error) {
    console.log(error);
  }
}

getUsers();

function parseAPI(dataAPI) {
  const { data } = dataAPI;
  console.log(data);

  data.forEach((user) => {
    console.log(user.name);
  });
}
