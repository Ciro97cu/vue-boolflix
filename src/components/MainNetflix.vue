<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3" v-for="item in arrayFilm" :key="item.id">
        <p>Titolo: {{ item.title }}</p>
        <p>Titolo originale: {{ item.original_title }}</p>
        <p>Lingua: {{ item.original_language }}</p>
        <p>Voto: {{ item.vote_average }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainNetflix",
  props: {
    arrayFilm: Array,
  },
};
</script>

<style lang="scss" scoped>
</style>