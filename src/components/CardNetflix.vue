<template>
  <div class="card_netflix">
    <div
      class="wrapper_img h-100"
      @mouseover="
        handleHover();
        handleActors(id, type);
      "
      v-if="hoverCard"
    >
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
    <div class="wrapper_info h-100 p-2" @mouseleave="handleHover()" v-else>
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
      <div class="pb-2">
        <p v-if="overview !== ''">Descrizione: {{ overview }}</p>
        <p v-else>Descrizione non disponibile</p>
      </div>
      <div>
        <div v-if="arrayActors.length > 0">
          Attori:
          <span v-for="(actor, i) in arrayActors" :key="i">
            {{ actor.name }},
          </span>
        </div>
        <p v-else>Attori non disponibili</p>
      </div>
    </div>
  </div>
</template>

<script>
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
    type: String,
  },
  data() {
    return {
      hoverCard: true,
      arrayActors: [],
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
    handleHover: function () {
      this.hoverCard = !this.hoverCard;
    },
    handleActors: function (id, type) {
      this.displayActors(id, type);
    },
    displayActors: function (id, type) {
      let params = {
        api_key: this.$api,
        language: "it-IT",
      };
      this.$axios
        .get(`https://api.themoviedb.org/3/${type}/${id}/credits`, { params })
        .then((response) => {
          this.arrayActors = response.data.cast.slice(0, 5);
        });
    },
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
}
</style>