<template>
  <div class="loader">
    <img src="~/assets/images/LD-gif-1.webp" alt="Loader" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Loader",
});
</script>

<style lang="scss">
  .loader {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 2rem;

    img {
      display: inline-flex;

      @media(min-width: 200px){
        width: 13rem;
      }
    }
  }
</style>
