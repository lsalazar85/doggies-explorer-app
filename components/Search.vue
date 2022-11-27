<script lang="ts" setup>
import Web3 from 'web3';
import { ref } from 'vue';
import ABI from '../constants/ABI.json';

const inputTokenId = ref('');

const onSubmit = async () => {
  try {
    const web3 = new Web3('https://mainnet.infura.io/v3/c83c37fa3b754594ada81272a37fa9b7');
    const address = '0xC7dF86762ba83f2a6197e1Ff9Bb40ae0f696B9E6';
    const contract = new web3.eth.Contract(ABI, address);
    const nftMetadata = await contract.methods.tokenURI(inputTokenId.value).call().then((resolve:string) => resolve);

    const response = await fetch(`${nftMetadata}`);
    const metadata = await response.json();
    console.log(metadata)
  } catch(e){
    console.log(e)
  }
}
</script>

<template>
  <div class="search-container">
    <form @submit.prevent="onSubmit()">
      <input v-model.number="inputTokenId" placeholder="search" />
      <button type="submit">button</button>
    </form>
  </div>
</template>
