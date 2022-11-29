<template>
  <div v-if={isLoading}>
    <p>{{ img }}</p>
    <p>{{ name }}</p>
    <p>{{ description }}</p>
  </div>
</template>

<script lang="ts" setup>
import { useMetadataStore } from '~/composables';

const { description, img, name, isLoading } = useMetadataStore();

</script>
