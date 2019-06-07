import axios from 'axios';

const http = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/beers`
});

const list = () => http.get('/')

const search = (search) => http.get('/search', { params: { q: search } })

const detail = (id) => http.get(`/${id}`)

const random = () => http.get(`/random`)

const create = (beer) => http.post(`/new`, beer)

export default {
  list,
  detail,
  create,
  random,
  search
}