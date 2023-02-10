<template>
  <div class="card">
    <div class="image">
      <img :src="product.image" alt="">
    </div>
    <h2 class="title"> {{ title }}</h2>
    <span class="price">{{ price }}</span>
  </div>
</template>

<script setup>

const props = defineProps({
  product: Object
})

const title = props.product.title.split(" ").slice(0, 3).join(" ")
const price = props.product.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) 
</script>

<style lang="scss" scoped src="./productCard.scss" />
