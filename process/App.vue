<template>
  <div id="main-app">
    <appointment-list
      :appointments = 'theAppointments' />
  </div>
</template>

<script>
import AppointmentList from './AppointmentList.vue';

export default {
  name: 'MainApp',
  data() {
    return {
      theAppointments: []
    } //return
  }, //data

  components: {
    'appointment-list': AppointmentList
  }, //components

  created: function() {
    $.getJSON('./builds/appointments.json')
      .done( info =>  {
        this.theAppointments = info;
    }); //getJSON
  } //created
} //default
</script>