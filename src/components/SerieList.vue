<template>
  <div class="row justify-content-center gap-4">
    <div class="col-sm-3" v-for="item in arraySerie" :key="item.id">
      <div class="wrapper_img">
        <img
          class="image_dimensions"
          :src="handlePosterImage(item.poster_path)"
          alt="item.title"
        />
      </div>
      <div class="wrapper_info">
        <p class="main_title">{{ item.name }}</p>
        <p class="pb-2">Titolo originale: {{ item.original_name }}</p>
        <div class="pb-2">
          Lingua:
          <img
            :src="displayFlags(item.original_language)"
            :alt="item.original_language"
          />
        </div>
        <div class="pb-2">
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
        <p>
          {{ handleOverview(item.overview) }}
        </p>
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
    handleOverview: function (text) {
      if (text === "") {
        return "Overview not Available";
      }
      return `Overview: ${text}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.col-sm-3 {
  width: 30%;
  background-color: black;
  color: white;
  aspect-ratio: 2/3;
  overflow-y: auto;
  padding: 0;
  border-radius: 10px;

  .image_dimensions {
    width: 100%;
    aspect-ratio: 2/3;
    object-fit: cover;
  }

  .main_title {
    font-size: 25px;
    font-weight: bold;
  }

  &:hover .wrapper_img {
    display: none;
  }

  &:hover .wrapper_info {
    display: block;
    padding: 1rem;
  }

  .wrapper_info {
    display: none;
  }
}
</style>