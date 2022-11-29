<template>
  <div class="card-description" v-if="!isLoading">
    <div class="card-description__content">
      <div class="card-description__child-element">
        <div class="card-description__details">
          <h2>Title and Owner</h2>
          <span>
            <b>Title:</b> {{ name }}
          </span>
          <span>
            <b>Owner:</b> {{ owner }}
          </span>
        </div>
        <div class="card-description__details">
          <h2>Description</h2>
          <span>{{ description }}</span>
        </div>
      </div>
      <div class="card-description__child-element">
        <div class="card-description__image">
          <img v-bind:src=thumbnail v-bind:alt=name />
        </div>
      </div>
    </div>
    <div class="card-description__traits">
      <h2>List of traits</h2>
      <div class="card-description__traits-container" v-for="trait in listOfTraits">
        <div class="card-description__trait">
          <span>{{trait.trait_type}}</span>
        </div>
        <div class="card-description__trait">
          <span v-if="trait.value">{{trait.value}}</span>
          <span v-if="!trait.value">N/A</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .card-description {
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    @media(min-width: 200px){
      padding: 0 1.2rem;
    }

    @media(min-width: 1000px){
      padding: 0 2rem 2rem 2rem;
    }

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
    }

    &__child-element{
      word-wrap: break-word;

      @media(min-width: 200px){
        width: 100%;
      }

      @media(min-width: 1000px){
        width: 50%;

        &:first-child{
          padding: 1rem 2rem;
          border: 1px solid $darkGreen;
          border-radius: 0.5rem;
        }
      }
    }

    &__image {
      width: 100%;

      img {
        width: 100%;
        border-radius: 0.5rem;
      }

      @media(max-width: 1000px) {
        margin-top: 1rem;
      }
    }

    &__details {
      display: flex;
      flex-direction: column;

      span {
        font-size: 12px;
      }

      &:last-child{
        margin-top: 2rem;
      }

      h2 {
        margin-bottom: 1rem;
      }
    }

    &__traits {
      display: flex;
      flex-direction: column;

      h2 {
        margin-bottom: 1rem;
      }
    }

    &__traits-container {
      display: flex;
      justify-content: space-between;

      &:nth-child( odd ){
        background: $lightGreen;
      }
    }

    &__trait {
      width: 50%;
      border: 1px solid $darkGreen;
      padding: 1rem;
      display: flex;
      justify-content: center;

      &:first-child{
        font-weight: 700;
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
