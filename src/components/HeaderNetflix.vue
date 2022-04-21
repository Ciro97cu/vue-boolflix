<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="wrapper_logo">
        <img class="w-100" src="../assets/img/Netflix.png" alt="netflix-logo" />
      </div>
      <div class="d-flex">
        <input
          class="form-control me-2"
          type="text"
          placeholder="Search"
          v-model="userInput"
          @keyup.enter="search"
        />
        <button class="btn btn-outline-danger" @click="search">Search</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "HeaderNetflix",
  data() {
    return {
      userInput: "",
    };
  },
  methods: {
    search: function () {
      this.$emit("search", this.userInput);
      this.userInput = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper_logo {
  width: 50px;
}
</style>