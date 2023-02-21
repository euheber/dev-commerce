<template>
  <section>

    <div class="warrap container">
      <div class="illustration">
        <BackgroundLogin />
      </div>

      <form>

        <div class="card">
          <a class="login">Log in</a>
          <div class="inputBox">
            <input type="email" required />
            <span class="user">Email</span>
          </div>

          <div class="inputBox">
            <input type="password" required />
            <span>Password</span>
          </div>
          <button class="enter" @click="confirmAccess">Enter</button>

        </div>

      </form>

    </div>

  </section>
</template>
<script setup>

import { onMounted } from 'vue';
import BackgroundLogin from '../../assets/SVG/BackgroundLogin.vue';
import router from '../../router';
import { useUserStateStore } from '../../stores/UserStateStore';

const userState = useUserStateStore();

onMounted(() => {
  if (userState.userConected) {
    router.push({ path: '/' })
  }
})

function confirmAccess() {
  localStorage.setItem("userSate", true);
  userState.LOGIN();

  router.push({ path: '/' })
}



</script>







































<style scoped lang="scss" src="./login.scss" />
