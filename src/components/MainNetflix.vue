<template>
  <main>
    <div class="container-fluid p-5">
      <div v-if="arrayFilm.length > 0" class="row justify-content-center p-4">
        <h2
          class="
            col-auto
            text-danger
            bg-dark
            rounded-3
            border border-2 border-danger
          "
        >
          FILM
        </h2>
      </div>
      <div class="row justify-content-center gap-4">
        <CardNetflix
          v-for="item in arrayFilm"
          :key="item.id"
          :poster="item.poster_path"
          :title="item.title"
          :originalTitle="item.original_title"
          :language="item.original_language"
          :vote="item.vote_average"
          :overview="item.overview"
          :id="item.id"
          :type="'movie'"
        />
      </div>
      <div v-if="arraySerie.length > 0" class="row justify-content-center p-4">
        <h2
          class="
            col-auto
            text-danger
            bg-dark
            rounded-3
            border border-2 border-danger
          "
        >
          SERIE TV
        </h2>
      </div>
      <div class="row justify-content-center gap-4">
        <CardNetflix
          v-for="item in arraySerie"
          :key="item.id"
          :poster="item.poster_path"
          :title="item.name"
          :originalTitle="item.original_name"
          :language="item.original_language"
          :vote="item.vote_average"
          :overview="item.overview"
          :id="item.id"
          :type="'tv'"
        />
      </div>
    </div>
  </main>
</template>

<script>
import CardNetflix from "./CardNetflix.vue";

export default {
  name: "MainNetflix",
  components: {
    CardNetflix,
  },
  props: {
    arrayFilm: Array,
    arraySerie: Array,
  },
};
</script>

<style lang="scss" scoped>
main {
  background-color: #141414;
  min-height: calc(100vh - 66px);
}
</style>