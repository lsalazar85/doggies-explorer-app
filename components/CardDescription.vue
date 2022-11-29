<template>
  <div class="card-description" v-if="!isLoading">
    <div class="card-description__content">
      <div class="card-description__content__child-element">
        <span>{{ owner }}</span>
        <span>{{ name }}</span>
        <span>{{ description }}</span>
      </div>
      <div class="card-description__content__child-element">
        <div class="card-description__content__child-element__image">
          <img v-bind:src=thumbnail v-bind:alt=name />
        </div>
      </div>
    </div>
    <div class="card-description__traits">
      <li v-for="item in listOfTraits">
        <span>{{ item.trait_type }} - {{ item.value}}</span>
      </li>
    </div>
  </div>
</template>

<style lang="scss">
  .card-description {
    display: flex;
    flex-direction: column;
    padding: 0 2rem 2rem 2rem;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 0.15rem;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $darkGreen;
      border-radius: 0.5rem;
    }

    @media(min-width: 200px){
      width: 100%;
    }

    @media(min-width: 1000px){
      width: 70%;
      max-width: 1200px;
      margin: 0 auto;
    }

    &__content{
      display: flex;
      margin-bottom: 2rem;

      @media(min-width: 200px){
        flex-direction: column;
      }

      @media(min-width: 1000px){
        flex-direction: row;
      }

      &__child-element{
        word-wrap: break-word;

         @media(min-width: 200px){
           width: 100%;

           &:last-child{
             margin-top: 1rem;
           }
         }

        @media(min-width: 1000px){
          width: 50%;

          &:first-child{
            padding: 1rem 2rem;
          }
        }

        &__image {
          width: 100%;

          img {
            width: 100%;
            border-radius: 0.5rem;
          }
        }
      }
    }


  }
</style>

<script lang="ts" setup>
import { useMetadataStore } from '~/composables';

const {
  description,
  thumbnail,
  name,
  isLoading,
  listOfTraits,
  owner
} = useMetadataStore();

</script>
