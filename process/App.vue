<template>
  <div>
      <h1>{{title}}</h1>
      <ul v-for="item in appointments">
        <li>{{item.petName}}</li>
      </ul>
  </div>
</template>

  <script>
    var apts = [{"petName":"Spot","petOwner":"Constance Smith","aptDate":"2017-07-24 08:30","aptNotes":"This German Shepherd is having some back pain"},{"petName":"Goldie","petOwner":"Barot Bellingham","aptDate":"2017-07-22 15:50","aptNotes":"This Goldfish has some weird spots in the belly"},{"petName":"Mitten","petOwner":"Hillary Goldwyn","aptDate":"2017-07-21 9:15","aptNotes":"Cat has excessive hairballs"},{"petName":"Buffy","petOwner":"Hassum Harrod","aptDate":"2017-07-20 15:30","aptNotes":"This Chihuahua has not eaten for three days and is lethargic"}];


export default {
  name: 'MainApp',
  data() {
    return {
      title: 'Appointment',
      appointments: apts
    } //return
  } //data
} //default
</script>