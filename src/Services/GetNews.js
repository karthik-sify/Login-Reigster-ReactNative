import axios from 'axios';

export default GetNews=async()=>{
  try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a5813d56377844fa9514e3ad80fee1fa');
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


