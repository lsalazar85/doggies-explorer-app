<template>
  <div class="loader">
    <img src="~/assets/images/LD-gif-1.webp" alt="Loader" />
  </div>
</template>

<style lang="scss">
  .loader {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    img {
      display: inline-flex;

      @media(min-width: 200px){
        width: 18rem;
      }

      @media(min-width: 1000px){
        width: 23rem;
      }
    }
  }
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Loader",
});
</script>
