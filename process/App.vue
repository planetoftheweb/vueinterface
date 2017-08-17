<template>
  <div id="main-app">
    <add-appointment 
      @addRecord="addAppointment"
    />
    <search-appointments
      :myKey = "orderKey"
      :myDir = "orderDir"
      @searchRecords = "searchAppointments"
      @keyChange = "changeKey"
      @dirChange = "changeDir"
    />
    <appointment-list
      :appointments="filteredApts"
      @remove="removeItem"
    />
  </div>
</template>

<script>
import _ from 'lodash';
import AddAppointment from './AddAppointment.vue';
import SearchAppointments from './SearchAppointments.vue';
import AppointmentList from './AppointmentList.vue';

export default {
  name: 'MainApp',

  data() {
    return {
      theAppointments: [],
      searchTerms: '',
      orderKey: 'petName',
      orderDir: 'asc'
    }
  },

  components: {
    'add-appointment': AddAppointment,
    'search-appointments': SearchAppointments,
    'appointment-list': AppointmentList,
  },

  created: function() {

    $.getJSON('./builds/data.json')
      .done(info => { 
        this.theAppointments = info;
    }); //getJSON

  }, //created

  methods: {

    addAppointment: function(apt) {
      this.theAppointments.push(apt.data);
    }, //addAppointment

    removeItem: function(apt) {
      this.theAppointments = _.without(this.theAppointments, apt);
    }, //removeItem

    searchAppointments: function(terms) {
      this.searchTerms = terms;
    }, //searchAppointments

    changeKey: function(value) {
      this.orderKey = value;
    }, //keyChange

    changeDir: function(value) {
      this.orderDir = value;
    }, //dirChange

  }, //methods

  computed: {
    
    sortedApts: function() {
      return this.theAppointments.filter(function(item) {
        return (
          (item.petName.toLowerCase().match(this.searchTerms.toLowerCase())) || (item.petOwner.toLowerCase().match(this.searchTerms.toLowerCase())) || (item.aptNotes.toLowerCase().match(this.searchTerms.toLowerCase()))
        ); //return
      }.bind(this)); //sortedApts

    }, //filteredApts
    
    filteredApts: function() {
      return _.orderBy(this.sortedApts, function(item) {
        return item[this.orderKey].toLowerCase();
      }.bind(this), this.orderDir);//orderBy
    } //filteredApts

  } // computed
} //default
</script>