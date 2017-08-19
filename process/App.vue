<template>
  <div id="main-app">
    <add-appointment 
      @addRecord="addAppointment" />
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
  }, //created

  methods: {
    AddAppointment: function(apt) {
      this.theAppointments.push(apt);
    } //addAppointment
  } //methods

} //default
</script>