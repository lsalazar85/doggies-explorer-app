<template>
  <main>
    <Search />
    <CardDescription />
  </main>
</template>

<style lang="scss">
main {
  background-image: $gradient;

  @media (min-width: 200px) {
    padding-top: 2rem;
  }
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>
