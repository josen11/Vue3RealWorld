<template>
  <h1> Events for Good </h1>
  <div class="events">
    <!--<EventCard v-for="event in events" :key="event.id" :event="event" />-->
    <!-- Ahora vamos a mandarlo en un for ya que el array de data events lo tenemos el este componente (componente padre), Remember :event (Object) es el Prop de subcomponente EventCard -->
    <EventCard v-for="event in events" :key="event.id" :event="event" />
    <!-- Antes llamabamos al subomponente event solo por que este ya contenia su data -->
    <!--<EventCard />-->
  </div>
</template>

<script>
import EventCard from '@/components/EventCard.vue'
//importar Axios aunque como solucion vamos a usar un servicio que modulariza axios 
//import axios from 'axios'
// Importamos nuestro servicio que nos permitira consumir una unica instancia de Axios en toda nuestra app
import EventService from '@/services/EventService.js'
export default {
  name: 'EventList',
  components: {
    // OJO los servicios no es necesario mencionarlos
    EventCard,
  },
  data() {
    return {
      // Inicialmente vamos a tener un array de events los cuales se pasa el subcomponente EventCard gracias a la prop event. OJO lo comentamos para retrieve esta data mediante Axios
      /*events: [
        {
          id: 123456,
          category: 'Test category',
          title: 'Title example',
          description: 'Some description',
          location: 'Cusco',
          date: 'Jan 18, 2022',
          time: '18:00',
          petsAllowed: true,
          organizer: 'Jose Aguirre',
        },
        {
          id: 123457,
          category: 'Test category2 ',
          title: 'Title example 2',
          description: 'Some description 2',
          location: 'Cusco',
          date: 'Jan 18, 2022',
          time: '18:00',
          petsAllowed: true,
          organizer: 'Jose Aguirre 2',
        },
      ],*/
      // Events se inicializa como un null
      events:null
    }
  },
  created() {
    // OJO com obuena practica vamos a Modularizing using a service (Services /EventService.js) de tal manera que solo tengamos inicializado Axios once.
    /*
    // Aprovechar el hook del lifecycle para llamar a Axios
    axios.get("https://my-json-server.typicode.com/josen11/Mock-DB/events")
    // Then is the callback to execute when the Promise is resolved
    .then( response => {
      //console.log('event', response.data)
      this.events = response.data
    })
     // Catch is the callback to execute when the Promise is rejected
    .catch(error => {
      console.log(error)
    })*/

    // Para user el servicio que modulariza Axios
    EventService.getEvents()
      .then(response => {
        this.events = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
