<template>
  <div class="row justify-content-center gap-4">
    <div class="col-sm-3 p-3" v-for="item in arraySerie" :key="item.id">
      <img
        class="w-100"
        :src="handlePosterImage(item.poster_path)"
        alt="item.title"
      />
      <p class="main_title">{{ item.name }}</p>
      <p>Titolo originale: {{ item.original_name }}</p>
      <div>
        Lingua:
        <img
          :src="displayFlags(item.original_language)"
          :alt="item.original_language"
        />
      </div>
      <div>
        Voto:
        <font-awesome-icon
          icon="fa-solid fa-star"
          class="text-warning"
          v-for="star in Math.ceil(item.vote_average / 2)"
          :key="'ifull' + star"
        />
        <font-awesome-icon
          icon="fa-regular fa-star"
          v-for="star in 5 - Math.ceil(item.vote_average / 2)"
          :key="'iempty' + star"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SerieList",
  props: {
    arraySerie: Array,
  },
  methods: {
    displayFlags: function (region) {
      switch (region) {
        case "en":
          return `https://www.kidlink.org/icons/f0-gb.gif`;
        case "ja":
          return `https://www.kidlink.org/icons/f0-jp.gif`;
        case "da":
          return `https://www.kidlink.org/icons/f0-dk.gif`;
        case "zh":
          return `https://www.kidlink.org/icons/f0-cn.gif`;
        case "ko":
          return `https://www.kidlink.org/icons/f0-kr.gif`;
        default:
          return `https://www.kidlink.org/icons/f0-${region}.gif`;
      }
    },
    handlePosterImage: function (path) {
      if (path === null) {
        return "https://bioessencegroup.com/assets/uploads/no-image.png";
      }
      return `https://image.tmdb.org/t/p/original${path}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.col-sm-3 {
  width: 30%;
  background-color: rgba($color: #ccc, $alpha: 0.7);
  color: white;
  border: 1px solid white;

  .main_title {
    font-size: 25px;
    font-weight: bold;
  }
}
</style>