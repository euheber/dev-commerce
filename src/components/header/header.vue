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
        <button class="btn"><RouterLink to="/login" class="page-link">Sign in</RouterLink></button>
        <button class="btn">Sign up</button>
        <button class="icon"><i class="fa-solid fa-cart-shopping"></i></button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>










<style scoped lang="scss" src="./header.scss" />
