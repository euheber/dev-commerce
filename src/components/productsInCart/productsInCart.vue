<template>
  <div class="product">
    <div class="price-img">
            <div class="img">
               <img :src="product.image" alt="">
            </div>

            <div class="price">
                <h2>{{ product.title }}</h2>
                <span>{{ product.price }}</span>
            </div>
    </div>

    <button class="remove-btn"><i class="fa-solid fa-xmark"></i></button>
  </div>
</template>

<script setup>
import { userShopCart } from '../../stores/UserCartStore';


const props = defineProps({
  product: Object
})
</script>

<style scoped lang="scss" src="./productsInCart.scss" />

