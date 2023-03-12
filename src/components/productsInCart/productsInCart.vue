<template>
  <div class="product">
    <div class="price-img">
      <div class="img">
        <img :src="product.image" alt="image of a product">
      </div>

      <div class="price">
        <h2>{{ product.title.split(" ").slice(0, 3).join(" ") }}</h2>
        <span>${{ product.price }}</span> <br>
        <span>Quantity: {{ product.quantity }}</span>

        <div class="btns">
          <button @click="pushObject(product)" class="icon"><i
              class="fa-solid fa-chevron-up"></i></button>
          <button @click="removeQuantityFromProduct(product)" class="icon"><i
              class="fa-solid fa-chevron-down"></i></button>
        </div>

      </div>
    </div>

    <button class="remove-btn" @click="removeProduct(product)"><i class="fa-solid fa-xmark"></i></button>
  </div>
</template>

<script setup>
import { userShopCart } from '../../stores/UserCartStore';


const { removeProduct } = userShopCart()
const { removeQuantityFromProduct } = userShopCart()
const { pushObject } = userShopCart()

const props = defineProps({
  product: Object
})
</script>

<style scoped lang="scss" src="./productsInCart.scss" />

