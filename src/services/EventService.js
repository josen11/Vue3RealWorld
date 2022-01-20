import axios from 'axios'
// SOLUTION to Modularizing axios using a service. Entonces instanciamos Axios una unica vez dentro de nuestra aplicacion.
// IMportante podemos crear una instancia en Axios, tener una baseURL, credenciales y headers.
const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id) {
    return apiClient.get('/events/'+ id)
  }
}
