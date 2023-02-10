<template>
  <div class="product">
    <div class="product-img">
      <img :src="product.image" alt="Produto">
      <i class="fa-solid fa-cart-shopping"></i>
    </div>

    <div class="product-info">
      <h1>{{ product.title }}</h1>
      <h2> {{ product.price }}</h2>
      <p class="text">
        {{ product.description }}
      </p>
    </div>
  </div>
</template>

<script setup>

const props = defineProps({ 
  product: Object
})


</script>





<style lang="scss" scoped src="./productCard.scss" />
