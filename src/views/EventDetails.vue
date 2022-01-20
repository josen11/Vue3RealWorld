<template>
 <!-- Importante siempre manejar si el event no es nulo, ya que en el before create esta como nulo entonces nos indicara error en nuestra consola la primera vez-->
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
// Siempre debemos importar nuestros Eventservice
import EventService from '@/services/EventService.js'

export default {
  data() {
    return {
      event: null,
      // Por ahora ponemos un fixed id, pero despues se cambiara como un prop
      // id:123
    }
  },
  props:['id'],
  created() {
    // Usamos nuestro Servicio pero con otro metodo 
    // fetch event (by id) and set local event data
    EventService.getEvent(this.id)
      .then(response => {
        this.event = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>