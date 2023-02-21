<template>
  <header>
    <nav class="container">
      <div class="choose-category">
        <h1>
          <RouterLink to="/">Devcommerce</RouterLink>
        </h1>
        <ul>
          <li>
            <RouterLink to="/about">About</RouterLink>
          </li>
          <li>
            <RouterLink to="/contact">Contact</RouterLink>
          </li>
        </ul>
      </div>

      <div class="warrapButtons">
        <div v-if="!userState.userConected" class="warrapLinks">
          <RouterLink to="/login">Sign in</RouterLink>
          <RouterLink to="/signup">Sign up</RouterLink>
        </div>

        <div class="shoppingCart" title='Shopping Cart' @click="callModal">
          <ShoppingCart />
          <span v-if="notificationIcon" :class="{ numberItens: notificationIcon }">{{
            cartShop.length
          }}</span>
        </div>
        
        <MenuButton v-if="userState.userConected" />

      </div>
    </nav>
    <Transition >
      <shopCart ref="openCartShop" />

    </Transition>
  </header>
</template>
<script setup>


import { onMounted, ref, watch } from 'vue';
import { useUserStateStore } from '../../stores/UserStateStore';
import { userShopCart } from '../../stores/UserCartStore';
import { RouterLink } from 'vue-router';
import ShoppingCart from '../../assets/SVG/ShoppingCart.vue'
import shopCart from '../shopcart/shopcart.vue'
import MenuButton from '../menuButton/menuButton.vue';

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
