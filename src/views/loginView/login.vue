<template>
  <section class="containerLogin">

    <div class="warrap">
      <div>
        <BackgroundLogin />
      </div>
      <form class="login" @submit.prevent>

        <h2>Sign in</h2>

        <div class="warrapInput" v-if="changeInput">

          <label for="email">E-mail</label>
          <input id="email" type="email" required v-model="email" />
          <button @click="setEmail" type="submit">Continue</button>

        </div>

        <div v-if="!changeInput" class="warrapInput">

          <p><span>email</span>&#x0003A; {{ email }} <a @click="changeEmail">change</a></p>

          <label for="passwordID">Password</label>
          <input id="passwordID" type="password" v-model="password" />
          <button @click="setPassword">Sign in</button>
          <p>{{ userState.error }}</p>
          <p>{{ userState.SHOW_STATE_USER }}</p>

        </div>

        <p> By continuing, you agree to the <span>Online Shopping Store Terms of Use.</span></p>

        <details>
          <summary>Need help?</summary>
          <p>I forgot the password.</p>
          <p>Other problems with access.</p>
        </details>

      </form>
    </div>

  </section>
</template>
<script setup>

import { ref } from 'vue';
import { useUserStateStore } from '../../stores/UserStateStore';
import BackgroundLogin from '../../assets/SVG/BackgroundLogin.vue';
import { onMounted } from 'vue';
import router from '../../router';
const userState = useUserStateStore();

const email = ref(null);
const password = ref(null);

const changeInput = ref(true);

onMounted(() => {
  if (userState.userConected) {
    router.push({ path: '/' })
  }
})

function setEmail() {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (email.value !== null && email.value.match(regex)) {
    changeInput.value = false;
  }
}

function setPassword() {
  userState.LOGIN(password.value.length);
  localStorage.setItem("userSate", userState.userConected);
  if (userState.userConected) {
    router.push({ path: '/' })
  }
}
function changeEmail() {
  changeInput.value = true;
  email.value = ''
}


</script>







<style scoped lang="scss" src="./login.scss" />
