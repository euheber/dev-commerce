<template>
  <section v-if="product">
    <div class="product container">
      <aside class="img-container">
        <img :src="product.image" alt="Teste">
      </aside>

      <aside class="product-info">
        <h1>{{ product.title }}</h1>

        <p>
          {{ product.description }}
        </p>

        <span>
          ${{ product.price }}
        </span>
        <button class="add-to-cart-btn">
          <ShoppingCart @click="pushAction.pushObject(product)" />
          Buy now
        </button>
      </aside>
    </div>
  </section>
</template>

<script setup>
import ShoppingCart from '../../assets/SVG/ShoppingCart.vue'
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';
import { userShopCart } from '../../stores/UserCartStore'

const pushAction = userShopCart()

const route = useRoute()
const id = route.params

let product = ref('')

onMounted(async () => {
  await fetch(`https://fakestoreapi.com/products/${id.id}`)
    .then(response => response.json())
    .then(item => product.value = item)
})

</script>

<style scoped lang="scss" src="./product.scss" />

