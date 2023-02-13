<template>
  <div class="product">
    <div class="price-img">
            <div class="img">
               <span>teste</span>
            </div>

            <div class="price">
                <h2>{{ cartShop.title }}</h2>
                <span>{{ cartShop.price }}</span>
            </div>
    </div>

    <button class="remove-btn"><i class="fa-solid fa-xmark"></i></button>
  </div>
</template>

<script setup>
const props = defineProps({ 
  cartShop: Object
})



</script>

<style scoped lang="scss" src="./productsInCart.scss" />

