<template>
  <div>
    <span>Card Description</span>
    <div v-if="!isLoading">
      {{ data }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useMetadataStore } from '~/composables';
const { isLoading, img, name, description, attributes, data } = useMetadataStore();
</script>
