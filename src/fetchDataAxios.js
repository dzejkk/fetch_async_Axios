import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com/users";

export async function getUsers() {
  try {
    const response = await axios.get(API_URL);
    //console.log(response);

    return {
      parsedData: parseAPI(response),
    };
  } catch (error) {
    console.log(error);
  }
}

getUsers();

function parseAPI({ data }) {
  return data.map((user) => {
    const { id, name, email, address } = user;

    return {
      name: name,
      id: id,
      email: email,
      address: address,
    };
  });
}
