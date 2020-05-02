<template lang="html">
  <div class="film-wrapper">
    <film-grid-item v-for="(film, index) in films" :key="index" :film="film" />
    <film-details v-for="(film, index) in films" :film="film"></film-details>
  </div>
</template>

<script>
import FilmGridItem from './FilmGridItem.vue';
import FilmDetails from './FilmDetails.vue';
import MoviesServices from '@/services/MoviesServices.js';
import {eventBus} from '@/main.js';

export default {
  data(){
    return {
      films: []
    };
  },
  mounted(){
    MoviesServices.getMovies().then(movies => this.films = movies);

    eventBus.$on('delete-game', (id) => {
      const index = this.films.findIndex(film => film._id === id);
      this.films.splice(index, 1);
    })
  },
  components: {
    'film-grid-item': FilmGridItem,
    'film-details': FilmDetails
  }
}
</script>

<style lang="css" scoped>

.film-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
