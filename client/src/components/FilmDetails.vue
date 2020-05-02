<template lang="html">
  <div>
    <p>Producer:{{film.crew.producer}}</p>
  </div>
</template>

<script>
export default {
  name: 'film-details',
  props: ['film']
}
</script>

<style lang="css" scoped>
</style>
