<template>
  <div class="table">
    <div class="table__items table__items--header">
      <div v-for="trait in traits" class="table__value">
        <span>{{ trait.trait_type }}</span>
      </div>
    </div>
    <div class="table__items">
      <div v-for="trait in traits" class="table__value">
        <span>{{ trait.value }}</span>
        <span v-if="!trait.value">N/A</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  traits:{
    type: Array,
    required: true
  }
})
</script>

<style lang="scss">
  .table{
    display: flex;
    flex-direction: column;
    margin-top: 1.438rem;
    padding-bottom: 2rem;

    @media(max-width: 1000px){
      width: 100%;
      overflow-x: auto;
    }

    &__items {
      display: flex;
      -webkit-box-pack: justify;
      justify-content: space-between;
      -webkit-box-align: center;
      align-items: center;
      width: 100%;

      @media(max-width: 1000px){
        width: 69.313rem;
        padding: 0 1.563rem 1rem 1.6rem;
      }

      &--header{
        background: transparent;
        border-bottom: 1px solid $darkGreen;
        font-weight: 700;
      }
    }

    &--header {
      background: transparent;
    }

    &__value{
      flex: 1 1 7.5rem;
      text-align: center;
      padding: 1rem 0;

      span {
        font-size: 0.75rem;
        text-transform: capitalize;
      }
    }
  }
</style>
