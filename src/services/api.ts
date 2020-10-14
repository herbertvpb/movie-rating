import axios from 'axios';

const api = axios.create({
  baseURL: 'https://imdb-internet-movie-database-unofficial.p.rapidapi.com',
  headers: {
    'content-type': 'application/octet-stream',
    'x-rapidapi-host': 'imdb-internet-movie-database-unofficial.p.rapidapi.com',
    'x-rapidapi-key': '286610f8d6mshfe057441420732bp11778ejsn11e002f35a93',
    useQueryString: true,
  },
});

export default api;
