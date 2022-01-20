const API_KEY = '354ff78ab39f2ab2f9ed96218a262e14';
const BASE_URL = 'https://api.themoviedb.org/3';

const trending = () =>
  fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`).then((res) =>
    res.json()
  );

const defaultList = () =>
  fetch(`${BASE_URL}/movie/550?api_key=${API_KEY}`).then((res) => res.json());

export const moviesApi = { trending, defaultList };
