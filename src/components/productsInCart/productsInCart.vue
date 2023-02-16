<template>
  <div class="product">
    <div class="price-img">
            <div class="img">
               <img :src="product.image" alt="">
            </div>

            <div class="price">
                <h2>{{ product.title.split(" ").slice(0, 3).join(" ") }}</h2>
                <span>{{ product.price }}</span> <br>
                <span>Quantidade:{{ product.quantity }}</span> 
                <button @click="removeQuantity.removeQuantityFromProduct(product)" class="icon"><i class="fa-solid fa-chevron-down"></i></button>
            </div>
    </div>

    <button class="remove-btn" @click="removeAction.removeProduct(product)"><i class="fa-solid fa-xmark"></i></button>
  </div>
</template>

<script setup>
import { userShopCart } from '../../stores/UserCartStore';


const removeAction = userShopCart()
const removeQuantity = userShopCart()

const props = defineProps({
  product: Object
})
</script>

<style scoped lang="scss" src="./productsInCart.scss" />

