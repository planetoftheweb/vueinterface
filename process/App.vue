<template>
  <div id="main-app">
    <add-appointment />
    <appointment-list
      :appointments = 'theAppointments' />
  </div>
</template>

<script>

import moment from 'moment';
import AddAppointment from './AddAppointment.vue';
import AppointmentList from './AppointmentList.vue';

export default {
  name: 'MainApp',
  data() {
    return {
      theAppointments: []
    } //return
  }, //data

  components: {
    'add-appointment': AddAppointment,
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