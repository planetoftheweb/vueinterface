<template>
  <li>
    <div>{{appointment.petName}}</div>
    <div>{{appointment.petOwner}}</div>
    <div>{{appointment.aptDate}}</div>
    <div>{{appointment.aptNotes}}</div>
  </li>
</template>

<script>
export default {
  name: 'PetAppointmentItem',
  props: ['appointment']
}
</script>
