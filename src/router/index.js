import { createRouter, createWebHistory } from 'vue-router'
import EventList from '@/views/EventList.vue'
import EventDetails from '@/views/EventDetails.vue'
import About from '@/views/About.vue'

//Podemos agregar dynamic segment usando el : (por ejemplo para Eventdetails)
const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList
  },
  {
    // Metodo usando una ruta fija
    //path: '/event/123',
    // Metodo usando una ruta dinamica
    path: '/event/:id',
    name: 'EventDetails',
    // Para mandar un route params como componenten props
    props: true,
    component: EventDetails
  },
  {
    path: '/about',
    name: 'About',
    component: About
    // Tenemos un performance Optimizacion cuando lo definimos asi
    // Ya que estamos definiendo el componente como un lazy routing
    /* 
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ //"../views/About.vue"), 
      
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
