import axios from 'axios';

export const BASE_URL = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': '44e619b118msh6ef2a767802b3b9p1a7b05jsn03f2ebc251cb',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  });

  return data;
};
