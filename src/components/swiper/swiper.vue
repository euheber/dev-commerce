<template>
  <section class="swiper-container">
    <swiper-container   :slidesPerView="1"
    :spaceBetween="30"
    :freeMode="true"
    :pagination="{
      clickable: true,
    }"
    class="mySwiper">
        <swiper-slide class="swiper">
           <img src="swiper/banner.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="swiper">
           <img src="swiper/banner2.jpg" alt="">
        </swiper-slide>
        <swiper-slide class="swiper">
           <img src="swiper/banner3.jpg" alt="">
        </swiper-slide>
    </swiper-container>
  </section>
</template>

<script setup>
import { register } from 'swiper/element/bundle';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
register()

</script>

<style lang="scss" scoped src="./swiper.scss"/>
