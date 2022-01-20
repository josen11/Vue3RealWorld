<template>
<!-- Para llamar al dinamic segment del route utilizamores v-bind en el atributo to y tambien lo llamares usando el name del route, de esta manera definimos el path y agregamos el parametro id -->
<!-- Por lo general es mas escalable y mantenible utilizar el to apuntando a route name que a paths, ya que nuestro codigo no estaria tan supeditado a un cambio de path-->
<!-- Recordemos que hacemos a este componente clickable using router-link, para llamar al parametro Id utilizando el params property, ahi indicamos que parametro y el valor que recibira-->
<!-- Para evitar que se vea como un link le damos una css class -->
<router-link class="event-link" :to="{name: 'EventDetails', params: {id: event.id}}">
  <div class="event-card">
    <!-- Podemos acceder al valor otrogado al Parametro id mediante $route.params.id, esto lo podemos utilizar cuando llamemos al API call usando el metodo de nuestro servicio -->
    <span> Event # {{$route.params.id}}</span>
    <span>@{{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.title }}</h4>
  </div>
</router-link>
</template>

<script>
export default {
  name: 'EventCard',
  props: {
    event: {
      type: Object,
      required: true
    },
  },
 
  data(){
    return{
      //En vez de trabajar con data estatica vamos a tener el objeto event como prop
      /*event: {
        id:123456,
        category: 'Test category',
        title: 'Title example',
        description: 'Some description',
        location: 'Cusco',
        date:'Jan 18, 2022',
        time: '18:00',
        petsAllowed: true,
        organizer: 'Jose Aguirre'
      }*/
    }
  }
}
</script>

<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.event-link {
  color:#2c3e50;
  text-decoration: none;
}
</style>
