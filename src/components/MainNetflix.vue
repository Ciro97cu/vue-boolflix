<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-3 p-3" v-for="item in arrayFilm" :key="item.id">
        <p>Titolo: {{ item.title }}</p>
        <p>Titolo originale: {{ item.original_title }}</p>
        <img
          :src="displayFlags(item.original_language)"
          :alt="item.original_language"
        />
        <p>Voto: {{ item.vote_average }}</p>
      </div>
      <div class="col-sm-3 p-3" v-for="item in arraySerie" :key="item.id">
        <p>Titolo: {{ item.name }}</p>
        <p>Titolo originale: {{ item.original_name }}</p>
        <img
          :src="displayFlags(item.original_language)"
          :alt="item.original_language"
        />
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
    arraySerie: Array,
  },
  methods: {
    displayFlags: function (region) {
      if (region === "en") {
        return `https://www.kidlink.org/icons/f0-gb.gif`;
      } else if (region === "ja") {
        return `https://www.kidlink.org/icons/f0-jp.gif`;
      }
      return `https://www.kidlink.org/icons/f0-${region}.gif`;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>