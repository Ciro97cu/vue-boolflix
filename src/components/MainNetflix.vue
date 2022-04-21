<template>
  <main>
    <div class="container-sm p-5">
      <div class="row justify-content-center gap-3">
        <div class="col-sm-3 p-3" v-for="item in arrayFilm" :key="item.id">
          <img
            class="w-100"
            :src="`https://image.tmdb.org/t/p/original${item.poster_path}`"
            @error="displayDefaultImage"
            alt="item.title"
          />
          <p>Titolo: {{ item.title }}</p>
          <p>Titolo originale: {{ item.original_title }}</p>
          <img
            :src="displayFlags(item.original_language)"
            :alt="item.original_language"
          />
          <p>Voto: {{ item.vote_average }}</p>
        </div>
        <div class="col-sm-3 p-3" v-for="item in arraySerie" :key="item.id">
          <img
            class="w-100"
            :src="`https://image.tmdb.org/t/p/original${item.poster_path}`"
            @error="displayDefaultImage"
            alt="item.title"
          />
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
  </main>
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
      } else if (region === "da") {
        return `https://www.kidlink.org/icons/f0-dk.gif`;
      } else if (region === "zh") {
        return `https://www.kidlink.org/icons/f0-cn.gif`;
      } else if (region === "ko") {
        return `https://www.kidlink.org/icons/f0-kr.gif`;
      }
      return `https://www.kidlink.org/icons/f0-${region}.gif`;
    },
    displayDefaultImage: function (e) {
      e.target.src =
        // "https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png";
        "https://bioessencegroup.com/assets/uploads/no-image.png";
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  background-color: black;
  min-height: calc(100vh - 66px);

  .col-sm-3 {
    width: 30%;
    background-color: rgba($color: #ccc, $alpha: 0.7);
    color: white;
    border: 1px solid white;
  }
}
</style>