<template>
  <section class="swiper-container">
    <swiper-container   :slidesPerView="3"
    :spaceBetween="30"
    :freeMode="true"
    :pagination="{
      clickable: true,
    }"
    class="mySwiper">
        <swiper-slide class="swiper">
           <img src="swiper/woman.png" alt="">
        </swiper-slide>
        <swiper-slide class="swiper">
           <img src="swiper/man.png" alt="">
        </swiper-slide>
        <swiper-slide class="swiper">
           <img src="swiper/jewelery.png" alt="teste">
        </swiper-slide>
        <swiper-slide class="swiper">
           <img src="swiper/jewelery.png" alt="teste">
        </swiper-slide>
        <swiper-slide class="swiper">
           <img src="swiper/jewelery.png" alt="teste">
        </swiper-slide>
    </swiper-container>
  </section>
</template>

<script setup>
import { register } from 'swiper/element/bundle';
import 'swiper/scss';
register()

</script>

<style lang="scss" scoped src="./swiper.scss"/>
