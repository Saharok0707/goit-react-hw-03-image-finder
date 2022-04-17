const API_KEY = '24754911-c9c5768c1694b4421d7644037';
const BASE_URL = 'https://pixabay.com/api/';

function fetchSearchMovies(name, page) {
  return fetch(
    `${BASE_URL}?q=${name}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error(`Нет картинок с именем ${name}`));
  });
}

const Api = { fetchSearchMovies };

export default Api;