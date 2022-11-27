<template>
  <main>
    <Search />
  </main>
</template>

<style lang="scss">
  main {
    background: $gray;
    @media(min-width: 200px){
      padding-top: 2rem;
    }

    @media(min-width: 1000px){
      padding-top: 6rem;
    }
  }
</style>


<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
