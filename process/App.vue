<template>
  <div id="main-app">
    <add-appointment 
      @addRecord="addAppointment" />
    <search-appointments />
    <appointment-list
      :appointments = 'theAppointments'
      @remove = 'removeItem' />
  </div>
</template>

<script>

import _ from 'lodash';
import moment from 'moment';
import AddAppointment from './AddAppointment.vue';
import SearchAppointments from './SearchAppointments.vue';
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
    'search-appointments': SearchAppointments,
    'appointment-list': AppointmentList
  }, //components

  created: function() {
    $.getJSON('./builds/appointments.json')
      .done( info =>  {
        this.theAppointments = info;
    }); //getJSON
  }, //created

  methods: {

    addAppointment: function(apt) {
      this.theAppointments.push(apt);
    }, //addAppointment

    removeItem: function(apt) {
      this.theAppointments = _.without(this.theAppointments, apt)
    }

  } //methods

} //default
</script>