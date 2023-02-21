<template>
  <div class="card">
    <RouterLink :to="`/product/${product.id}`">
      <img :src="product.image" alt="image of a product">
      <h2> {{ title }}</h2>
      <span>{{ price }}</span>
    </RouterLink>
    <button @click="pushAction.pushObject(product)">Add cart</button>

  </div>
</template>

<script setup>
import { userShopCart } from '../../stores/UserCartStore'

import { RouterLink } from 'vue-router';

const props = defineProps({
  product: Object
})

const title = props.product.title.split(" ").slice(0, 3).join(" ")
const price = props.product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

const pushAction = userShopCart()

</script>



<style lang="scss" scoped src="./productCard.scss" />
