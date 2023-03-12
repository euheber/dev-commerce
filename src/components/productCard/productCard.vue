<template>
  <div class="card">
    <RouterLink :to="`/product/${product.id}`">
      <img :src="product.image" alt="image of a product">
    </RouterLink>
    <div class="warrapTitle">
      <h2 class="title">{{ title }}</h2>
      <span class="price">{{ price }}</span>
    </div>
    <button @click="pushAction.pushObject(product)"><Addcart/>Add to cart</button>

  </div>
</template>

<script setup>
import { userShopCart } from '../../stores/UserCartStore'
import { RouterLink } from 'vue-router';
import Addcart from '../../assets/SVG/AddCart.vue'
const props = defineProps({
  product: Object
})

const title = props.product.title.split(" ").slice(0, 3).join(" ")
const price = props.product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

const pushAction = userShopCart()

</script>



<style lang="scss" scoped src="./productCard.scss" />
