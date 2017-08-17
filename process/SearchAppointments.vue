<template>
  <div class="row search-appointments">
    <div class="col-sm-offset-3 col-sm-6">

      <div class="input-group">

        <input id="SearchApts"
          v-model="searchTerm"
          placeholder="Search" type="text" class="form-control" aria-label="Search Appointments" />

        <div class="input-group-btn">
          <button type="button" class="btn btn-primary dropdown-toggle"
            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span class="caret"></span></button>

            <ul class="dropdown-menu dropdown-menu-right">

              <li><a href="#" id="petName"
                @click="requestKeyChange('petName')">Pet Name
                <span class="glyphicon glyphicon-ok"
                  v-if="myKey==='petName'"></span></a></li>

              <li><a href="#" id="aptDate"
                @click="requestKeyChange('aptDate')">Date 
                <span class="glyphicon glyphicon-ok"
                  v-if="myKey==='aptDate'"></span></a></li>

              <li><a href="#" id="ownerName"
                @click="requestKeyChange('petOwner')">Owner 
                <span class="glyphicon glyphicon-ok"
                  v-if="myKey==='petOwner'"></span></a></li>

              <li role="separator" class="divider"></li>

              <li><a href="#" id="asc"
                @click="requestDirChange('asc')">Asc
                <span class="glyphicon glyphicon-ok"
                  v-if="myDir==='asc'"></span></a></li>

              <li><a href="#" id="desc"
                @click="requestDirChange('desc')">Desc
                <span class="glyphicon glyphicon-ok"
                  v-if="myDir==='desc'"></span></a></li>
            </ul>
        </div><!-- input-group-btn --> 
      </div><!-- input-group --> 
    </div><!-- col-sm-offset-3 --> 
  </div><!-- search-appointments -->
</template>

<script>
export default {

  name: 'SearchAppointments',

  data() {
    return {
      theAppointments: [],
      searchTerm: ''
    } //return
  }, //data

  props: ['myKey', 'myDir'],

  watch: {
    searchTerm: function () {
      this.$emit("searchRecords", this.searchTerm );
    } //searchTerm
  }, //watch

  methods: {
    requestKeyChange: function(value) {
      this.$emit("keyChange", value);
    }, //requestKeyChange

    requestDirChange: function(value) {
      this.$emit("dirChange", value);
    } //requestKeyChange
  } //methods
} // export
</script>
