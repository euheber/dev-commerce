<template>
  <header>
    <nav class="container">
      <div class="choose-category">
        <h1>
          <RouterLink to="/">devcommerce</RouterLink>
        </h1>
        <ul>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>

      <div class="warrapButtons">
        <div v-if="!userState.userConected" class="warrapLinks">
          <RouterLink to="/login">Sign in</RouterLink>
          <RouterLink to="/signup">Sign up</RouterLink>
        </div>

        <MenuButton v-if="userState.userConected" />
        <button class="icon" @click="callModal"><i class="fa-solid fa-cart-shopping"></i></button>
      </div>
    </nav>
    <shopCart ref="openCartShop" />
</header>
</template>
<script setup>


import ShoppingCart from '../../assets/SVG/ShoppingCart.vue'
import { RouterLink } from 'vue-router';
import { onMounted, ref, watch } from 'vue';
import shopCart from '../shopcart/shopcart.vue'
import MenuButton from '../menuButton/menuButton.vue';
import { useUserStateStore } from '../../stores/UserStateStore';
import { userShopCart } from '../../stores/UserCartStore';

const { cartShop } = userShopCart();
const userState = useUserStateStore();

const storedUserState = localStorage.getItem("userSate");
const openCartShop = ref()

const notificationIcon = ref(false);


watch(cartShop, (newValue) => {
  notificationIcon.value = newValue.length > 0;
  localStorage.setItem("notification", notificationIcon.value);
});



const callModal = () => {
  openCartShop.value.handleCartshopFunction()
}

onMounted(() => {
  if (storedUserState === 'true') {
    userState.LOGIN();
  }
  if (cartShop.length > 0) {
    notificationIcon.value = localStorage.getItem("notification") === "true";
  }
})

</script>






































<style scoped lang="scss" src="./header.scss" />
