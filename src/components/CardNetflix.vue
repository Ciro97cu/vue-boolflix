<template>
  <div class="card_netflix">
    <div class="wrapper_img">
      <img
        v-if="poster !== null"
        class="image_dimensions"
        :src="`https://image.tmdb.org/t/p/original${poster}`"
        :alt="title"
      />
      <img
        v-else
        class="image_dimensions"
        src="https://bioessencegroup.com/assets/uploads/no-image.png"
        alt="no-image"
      />
    </div>
    <div class="wrapper_info">
      <p class="main_title pb-2">{{ title }}</p>
      <p v-if="originalTitle !== title" class="pb-2">
        Original Title : {{ originalTitle }}
      </p>
      <div class="pb-2">
        Lingua:
        <img :src="displayFlags(language)" :alt="language" />
      </div>
      <div class="pb-2">
        Voto:
        <font-awesome-icon
          icon="fa-solid fa-star"
          class="text-warning"
          v-for="star in Math.ceil(vote / 2)"
          :key="'ifull' + star"
        />
        <font-awesome-icon
          icon="fa-regular fa-star"
          v-for="star in 5 - Math.ceil(vote / 2)"
          :key="'iempty' + star"
        />
      </div>
      <div>
        <p v-if="overview !== ''">Overview: {{ overview }}</p>
        <p v-else>Overview not available</p>
      </div>
      <!-- <p>{{ displayActors(.id) }}</p> -->
    </div>
  </div>
</template>

<script>
// import axios from "axios";
// import { api } from "../api.js";

export default {
  name: "CardNetflix",
  props: {
    poster: String,
    title: String,
    originalTitle: String,
    language: String,
    vote: Number,
    overview: String,
    id: Number,
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
    // displayActors: function (id) {
    //   let params = {
    //     api_key: api,
    //     language: "it-IT",
    //   };
    //   axios
    //     .get(`https://api.themoviedb.org/3/movie/${id}/credits`, { params })
    //     .then((response) => {
    //       console.log(response.data.cast);
    //     });
    // },
  },
};
</script>

<style lang="scss" scoped>
.card_netflix {
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
    font-weight: 400;
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