<template>
  <div class="search-container">
    <div class="search-container__logo">
      <img src="~/assets/images/snoop-logo.svg" alt="Main Logo" />
    </div>
    <h2>Doggies Explorer</h2>
    <form class="search-container__form">
      <span class="search-container__label">Token ID</span>
      <input
        type="number"
        v-model.number="inputTokenId"
        placeholder="e.g  1411"
      />
      <div class="search-container__buttons">
        <button type="submit" @click.prevent="onSubmit(false)">Search</button>
        <button type="submit" @click.prevent="onSubmit(true)">Random Doggie</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import Web3 from "web3";
import { ref } from "vue";

import ABI from "../constants/ABI.json";
import { store } from "~/store";

const inputTokenId = ref("");

const web3 = new Web3(`${process.env.MAINNET}`);
const address = process.env.ADDRESS;
const contract = new web3.eth.Contract(ABI, address);

const getRandomId = () => {
  const randomValue = Math.floor(Math.random() * 10000).toString();
  inputTokenId.value = randomValue;
  return randomValue;
};

const onSubmit = async (randomDoggie?: boolean) => {
  try {
    await store.dispatch("nft/getLoading", { isLoading: true });
    await store.dispatch("nft/getError", { error: false });

    const currentTokenId = !randomDoggie ? inputTokenId.value : getRandomId();

    const nftMetadata = await contract.methods.tokenURI(currentTokenId).call();
    const owner = await contract.methods.ownerOf(currentTokenId).call();

    const response = await fetch(`${nftMetadata}`);
    const data = await response.json();

    await store.dispatch("nft/getMetadata", {
      owner,
      thumbnail: data?.image_url,
      description: data?.description,
      name: data?.name,
      listOfTraits: [...data?.attributes],
    });

    await store.dispatch("nft/getLoading", { isLoading: false });
  } catch (e) {
    await store.dispatch("nft/getMetadata", {
      owner: "",
      thumbnail: "",
      description: "",
      name: "",
      listOfTraits: [],
    });

    inputTokenId.value = "";
    await store.dispatch("nft/getError", { error: true });
  }
};
</script>

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
    font-size: 1.3rem;

    @media (min-width: 200px) {
      margin: 0 0 1rem 0;
    }
  }

  &__logo {
    @media (min-width: 200px) {
      width: 14rem;
    }

    @media (min-width: 1000px) {
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

    @media (min-width: 200px) {
      width: 80%;
      text-align: center;
    }

    @media (min-width: 1000px) {
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

      &::-webkit-outer-spin-button,
      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      &[type="number"] {
        -moz-appearance: textfield;
      }
    }
  }

  &__buttons{
    display: flex;
    justify-content: space-between;

    button {
      width: 9.375rem;
      height: 1.875rem;
      background: $yellow;
      border: 2px solid $yellow;
      font-weight: 700;
      font-size: 0.8rem;
      border-radius: 0.2rem;
      margin: 0 auto;
      cursor: pointer;
      color: $darkGreen;

      &:hover {
        opacity: 0.85;
        transition: all 0.2s;
      }

      &:first-child {
        margin-right: 1rem;
      }
    }
  }
}
</style>
