<template>
  <div class="search-container">
    <div class="search-container__logo">
      <img src="~/assets/images/snoop-logo.svg" alt="Main Logo" />
    </div>
    <h2>Dogggies Explorer</h2>
    <form class="search-container__form" @submit.prevent="onSubmit()">
      <span class="search-container__label">Token ID</span>
      <input v-model.number="inputTokenId" placeholder="e.g  1411" />
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<style lang="scss">
  .search-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
    margin-bottom: 2rem;

    img {
      width: 100%;
      height: 100%;
    }

    h2 {
      margin: 2rem 0 2rem 0;
      color: $yellow;

      @media(min-width: 200px){
        margin: 1rem 0;
      }

      @media(min-width: 1000px){
        margin: 2rem 0;
      }
    }

    &__logo{
      @media(min-width: 200px){
        width: 14rem;
      }

      @media(min-width: 1000px){
        width: 18.75rem;
      }
    }

    &__label {
      margin-bottom: 1rem;
      font-weight: 500;
    }

    &__form {
      display: flex;
      flex-direction: column;

      @media(min-width: 200px){
        width: 80%;
        text-align: center;
      }

      @media(min-width: 1000px){
        width: 18.75rem;
        text-align: initial;
      }

      input {
        width: 100%;
        height: 2.813rem;
        margin-bottom: 1rem;
        border-radius: 0.2rem;
        padding: 0.5rem;
        text-align: center;
      }

      button {
        width: 9.375rem;
        height: 1.875rem;
        background: $yellow;
        border: 2px solid $yellow;
        font-weight: 700;
        font-size: 0.9rem;
        border-radius: 0.2rem;
        margin: 0 auto;
        cursor: pointer;
        color: $darkGreen;

        &:hover {
          opacity: 0.85;
          transition: all 0.2s;
        }
      }
    }
  }
</style>

<script lang="ts" setup>
import Web3 from 'web3';
import { ref } from 'vue';

import ABI from '../constants/ABI.json';
import { store } from '~/store';

const inputTokenId = ref('');

const onSubmit = async () => {
  try {
    const web3 = new Web3(`${process.env.MAINNET}`);
    const address = process.env.ADDRESS;
    const contract = new web3.eth.Contract(ABI, address);

    await store.dispatch('nft/getLoading', { isLoading: true });
    await store.dispatch('nft/getError', { error: false });

    const nftMetadata = await contract.methods.tokenURI(inputTokenId.value).call();
    const owner = await contract.methods.ownerOf(inputTokenId.value).call();

    const response = await fetch(`${nftMetadata}`);
    const data = await response.json();

    await store.dispatch('nft/getMetadata', {
      owner,
      thumbnail: data?.image_url,
      description: data?.description,
      name: data?.name,
      listOfTraits: [...data?.attributes]
    })

    await store.dispatch('nft/getLoading', { isLoading: false });
    inputTokenId.value = '';
    console.log(store.state.nft)

  } catch(e){
    await store.dispatch('nft/getMetadata', {
      owner: '',
      thumbnail: '',
      description: '',
      name: '',
      listOfTraits: []
    })
    await store.dispatch('nft/getError', { error: true })
  }
}
</script>
