// const API_URL = "https://jsonplaceholder.typicode.com/users";

// export async function fetchData() {
//   try {
//     const response = await fetch(API_URL);
//     const data = await response.json();
//     //console.log(data);

//     return {
//       parsedData: parseData(data),
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchData();

// function parseData(usersArray) {
//   return usersArray.map(({ name, email }) => ({
//     // musis pouzit map, alebo for each pretoze to je array of objects
//     firstName: name,
//     emailAddress: email,
//   }));
// }
