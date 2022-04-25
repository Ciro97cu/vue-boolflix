<template>
  <nav class="navbar navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="wrapper_logo">
        <img
          class="w-100"
          src="../assets/img/boolflix.png"
          alt="netflix-logo"
        />
      </div>
      <div class="d-flex">
        <input
          class="form-control me-2"
          type="text"
          placeholder="Cerca"
          v-model="userInput"
          @keyup.enter="search"
        />
        <button class="btn btn-outline-danger" @click="search">Cerca</button>
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
  width: 150px;
}

.form-control:focus {
  border-color: red;
  box-shadow: 0 0 0 0.25rem rgb(253 91 13 / 25%);
}
</style>