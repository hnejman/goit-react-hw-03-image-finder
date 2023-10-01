import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';

async function getFromAPI(search, key, page) {
    const response = await axios.get(
      `?key=${key}&page=${page}&q=${search}&image_type=photo&orientation=horizontal&per_page=15`
    );
    return response;
  }

export default getFromAPI;