<template>
  <header>
    <nav>
      <div class="choose-category">
        <h1 class="page-link">
          <RouterLink to="/">devcommerce</RouterLink>
        </h1>
        <ul>
          <li>
            <RouterLink to="/about" class="page-link">About</RouterLink>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </div>

      <div class="btns">
        <div v-if="!userState.userConected">
          <button class="btn">
            <RouterLink to="/login" class="page-link">Sign in</RouterLink>
          </button>

          <button class="btn">
            <RouterLink to="/signup" class="page-link">Sign up</RouterLink>
          </button>
        </div>
        <MenuButton v-if="userState.userConected" />
        <button class="icon" v-if="!userState.userConected"><i class="fa-solid fa-cart-shopping"></i></button>
      </div>
    </nav>
    <shopCart />
  </header>
</template>
<script setup>
import { RouterLink } from 'vue-router';
import { onMounted } from 'vue';
import shopCart from '../shopcart/shopcart.vue'
import MenuButton from '../menuButton/menuButton.vue';
import { useUserStateStore } from '../../stores/UserStateStore';

const userState = useUserStateStore();

const storedUserState = localStorage.getItem("userSate");

onMounted(() => {
  if (storedUserState === 'true') {
    userState.LOGIN();
  }
})

</script>




























<style scoped lang="scss" src="./header.scss" />
