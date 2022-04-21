<template>
  <div class="row justify-content-center gap-3">
    <div class="col-sm-3 p-3" v-for="item in arrayFilm" :key="item.id">
      <img
        class="w-100"
        :src="`https://image.tmdb.org/t/p/original${item.poster_path}`"
        @error="displayDefaultImage"
        alt="item.title"
      />
      <p class="main_title">{{ item.title }}</p>
      <p>Titolo originale: {{ item.original_title }}</p>
      <div>
        Lingua:
        <img
          :src="displayFlags(item.original_language)"
          :alt="item.original_language"
        />
      </div>

      <p>
        Voto: {{ displayStars(item.vote_average) }}
        <font-awesome-icon
          icon="fa-solid fa-star"
          class="yellow_star"
          v-for="star in yellowStar"
          :key="star"
        />
        <font-awesome-icon
          icon="fa-regular fa-star"
          v-for="star in emptyStar"
          :key="star"
        />
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmList",
  props: {
    arrayFilm: Array,
  },
  data() {
    return {
      yellowStar: null,
      emptyStar: null,
    };
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
    displayDefaultImage: function (e) {
      e.target.src = "https://bioessencegroup.com/assets/uploads/no-image.png";
    },
    displayStars: function (vote) {
      this.yellowStar = Math.ceil(vote / 2);
      this.emptyStar = 5 - Math.ceil(vote / 2);
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

  .yellow_star {
    color: gold;
  }
}
</style>