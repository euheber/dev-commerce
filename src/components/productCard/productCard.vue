<template>
    <div class="card">
      <div class="image">
        <img :src="product.image" alt="">
      </div>
      <h2 class="title"> {{ title }}</h2>
      <span class="price">{{ price }}</span>

      <button @click="pushAction.pushObject(product)">Pegar produto</button>

    </div>
</template>

<script setup>
import { mapActions, storeToRefs } from 'pinia';
import { userShopCart } from '@/stores/UserCartStore'


const props = defineProps({
  product: Object
})

const title = props.product.title.split(" ").slice(0, 3).join(" ")
const price = props.product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) 

const {cartShop} = storeToRefs()
const pushAction = userShopCart()

</script>



<style lang="scss" scoped src="./productCard.scss" />
