<template lang="html">
  <div>
    <div class="film-card">
      <p><span class="film-key">Director: </span>{{film.crew.director}}  </p>
      <p><span class="film-key">Producer: </span>{{film.crew.producer}} </p>
      <p><span class="film-key">Synopsis: </span>{{film.synopsis}}  </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'film-details',
  props: ['film']
}
</script>

<style lang="css" scoped>
.film-card {
  background-color: #BFDBF7;
  border: 1px solid #BFDBF7;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: 25vw;
}

.film-key {
  font-weight: bold;
  color: #3E363F
}
</style>
