<template>
  <div v-if={isLoading}>
    <p>{{ owner }}</p>
    <p>{{ thumbnail }}</p>
    <p>{{ name }}</p>
    <p>{{ description }}</p>
    <li v-for="item in listOfTraits">
      <span>{{ item.trait_type }} - {{ item.value}}</span>
    </li>
  </div>
</template>

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
