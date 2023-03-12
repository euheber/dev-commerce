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
          <button @click="pushObject(product)" class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16px" height="16px" class="quantity"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"/></svg>
          </button>
          <button @click="removeQuantityFromProduct(product)" class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16px" height="16px" class="quantity"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"/></svg></button>
        </div>

      </div>
    </div>

    <button class="remove-btn" @click="removeProduct(product)">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"  width="25px" height="25px" class="removeIcon"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"/></svg>
    </button>
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

