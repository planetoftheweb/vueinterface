<template>
  <div id="main-app">
    <add-appointment 
      @addRecord="addAppointment" />
    <search-appointments 
      :myKey = "filterKey"
      :myDir = "filterDir"
      @searchRecords='searchAppointments'
      @keyChange = "changeKey"
      @dirChange = "changeDir" />
    <appointment-list
      :appointments = 'filteredApts'
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
      theAppointments: [],
      searchTerms: '',
      filterKey: 'petName',
      filterDir: 'asc'
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
    }, //removeItem

    searchAppointments: function(terms) {
      this.searchTerms = terms;
    }, //searchAppointments

    changeKey: function(value) {
      this.filterKey = value;
    }, //changeKey

    changeDir: function(value) {
      this.filterDir = value;
    }, //changeKey

  }, //methods

  computed: {
    searchedApts: function() {
      return this.theAppointments.filter(function(item) {
        return (
          (item.petName.toLowerCase().match(this.searchTerms.toLowerCase())) ||
          (item.petOwner.toLowerCase().match(this.searchTerms.toLowerCase())) ||
          (item.aptNotes.toLowerCase().match(this.searchTerms.toLowerCase()))
        )
      }.bind(this));
    }, //searchedApts

    filteredApts: function() {
      return _.orderBy(this.searchedApts, function(item) {
        return item[this.filterKey].toLowerCase();
      }.bind(this), this.filterDir);
    } //filteredApts

  } //computed
} //default
</script>