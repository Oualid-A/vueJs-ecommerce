import axios from 'axios';

const API_URL = 'http://localhost:3000/products';

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    console.log(response);
    return response.data;
  } catch (error) {
    throw error;
  }
};
