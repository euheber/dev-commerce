<template>
  <header>
    <nav>
      <div class="choose-category">
        <h1 class="page-link">
          <RouterLink to="/">devcommerce</RouterLink>
        </h1>
        <ul>
          <li>
            <a href="">About</a>
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
          <button class="btn">Sign up</button>
        </div>
        <UserIcon v-if="userState.userConected"/>
        <button class="icon"><i class="fa-solid fa-cart-shopping"></i></button>
      </div>
    </nav>
    <shopCart />
  </header>
</template>
<script setup>
import { RouterLink } from 'vue-router';
import { useUserStateStore } from '../../stores/UserStateStore';
import UserIcon from '../../assets/SVG/UserIcon.vue'
import shopCart from '../shopcart/shopcart.vue'

const userState = useUserStateStore();

const storedUserState = localStorage.getItem("userSate");

if (storedUserState) {
  userState.LOGIN(8);
}

</script>














<style scoped lang="scss" src="./header.scss" />
