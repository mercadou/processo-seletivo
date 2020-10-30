import axios from "axios";

export const getPeople = async id => {
  const { data } = await axios.get(
    `https://swapi.dev/api/people/${id}/?format=json`
  );
  return data;
};
