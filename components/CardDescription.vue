<template>
  <div class="card-description">
    <div v-if="!isLoading && (listOfTraits && listOfTraits.length && !error)">
      <div class="card-description__content">
        <div class="card-description__child-element">
          <div class="card-description__details">
            <h2>Title and Owner</h2>
            <span> <b>Title:</b> {{ name }} </span>
            <span> <b>Owner:</b> {{ owner }} </span>
          </div>
          <div class="card-description__details">
            <h2>Description</h2>
            <span>{{ description }}</span>
          </div>
        </div>
        <div class="card-description__child-element">
          <div class="card-description__image">
            <img v-bind:src="thumbnail" v-bind:alt="name" />
          </div>
        </div>
      </div>
      <div class="card-description__traits">
        <h2>List of traits</h2>
        <div
          class="card-description__traits-container"
          v-for="(trait, idx) in listOfTraits"
          :key="idx"
        >
          <div class="card-description__trait">
            <span>{{ trait.trait_type }}</span>
          </div>
          <div class="card-description__trait">
            <span v-if="trait.value">{{ trait.value }}</span>
            <span v-if="!trait.value">N/A</span>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="isLoading && !error">
      <Loader />
    </div>
    <div class="not-data" v-else>
      <span v-if="error">Token ID not found</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMetadataStore } from "~/composables";
import Loader from "~/components/Loader.vue";

const { description, thumbnail, name, isLoading, listOfTraits, owner, error } =
  useMetadataStore();
</script>

<style lang="scss">
.card-description {
  display: flex;
  flex-direction: column;

  @media (min-width: 200px) {
    padding: 0 1.2rem;
  }

  @media (min-width: 1000px) {
    padding: 0 2rem 2rem 2rem;
  }

  @media (min-width: 200px) {
    width: 100%;
  }

  @media (min-width: 1000px) {
    width: 70%;
    max-width: 1200px;
    margin: 0 auto;
  }

  &__content {
    display: flex;
    margin-bottom: 2rem;

    @media (min-width: 200px) {
      flex-direction: column;
    }

    @media (min-width: 1000px) {
      flex-direction: row;
    }
  }

  &__child-element {
    word-wrap: break-word;

    @media (min-width: 200px) {
      width: 100%;
    }

    @media (min-width: 1000px) {
      width: 50%;

      &:first-child {
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

    @media (max-width: 1000px) {
      margin-top: 1rem;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;

    span {
      font-size: 0.75rem;
    }

    &:last-child {
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

    &:nth-child(odd) {
      background: $lightGreen;
    }
  }

  &__trait {
    width: 50%;
    border: 1px solid $darkGreen;
    padding: 1rem;
    display: flex;
    justify-content: center;

    &:first-child {
      font-weight: 700;
    }
  }
}

.not-data {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  span {
    font-weight: 700;
    font-size: 1rem;
    color: $darkGreen;
  }
}
</style>
