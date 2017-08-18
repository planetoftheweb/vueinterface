<template>
  <div>
    <ul class="appointment-list"
      v-for="(item, i) in appointments"
      :key="i">
      <li>
        <div>{{item.petName}}</div>
        <div>{{item.petOwner}}</div>
        <div>{{item.aptDate}}</div>
        <div>{{item.aptNotes}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AppointmentList',
  props: ['appointments']
}
</script>



<style scoped>
  .appointment-list {
    margin: 0;
    padding: 0;
    list-style-type: none;
    margin: 10px 5%;
    font-size: 1.7rem;
  }
</style>