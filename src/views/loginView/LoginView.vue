<template>
  <section>

    <div class="warrap container">
      <div class="illustration">
        <BackgroundLogin />
      </div>

      <form @submit.prevent="validateForm">

        <div class="card">
          <h1 class="login">Log in</h1>



          <div class="inputBox">
            <input type="email" v-model="email" />
            <span class="user">Email</span>
          </div>
          <small v-if="emailError">{{ emailError }}</small>

          <div class="inputBox">
            <input type="password" v-model="password" />
            <span>Password</span>
          </div>
          <small v-if="passwordError">{{ passwordError }}</small>

          <button class="enter" type="submit">Enter</button>

        </div>

      </form>

    </div>

  </section>
</template>
<script setup>

import { onMounted, ref } from 'vue';
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


const email = ref('');
const password = ref('');
const emailError = ref('');
const passwordError = ref('');


const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
const isValidPassword = (password) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return passwordRegex.test(password);
};

const validateForm = () => {

  emailError.value = '';
  passwordError.value = '';

  if (!email.value) {
    emailError.value = 'E-mail is mandatory';
    return;
  } else if (!isValidEmail(email.value)) {
    emailError.value = 'Invalid e-mail';
    return;
  }

  if (!password.value) {
    passwordError.value = 'Password is mandatory';
    return;
  } else if (!isValidPassword(password.value)) {
    passwordError.value = 'Invalid password'
    return;
  }
  confirmAccess()
};


</script>







































<style scoped lang="scss" src="./login.scss" />
