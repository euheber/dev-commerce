<template>
    <section class="containerLogin">

        <div class="warrap">
            <form class="login" @submit.prevent>

                <h2>Sign in</h2>
                <div v-if="userEmail.length === 0" class="warrapInput">
                    <label for="email">E-mail</label>
                    <input id="email" type="email" required v-model="email" ref="input" />
                    <button @click="setEmail" type="submit">Continue</button>
                </div>
                <div v-if="userEmail.length > 0 & userPassoword.length === 0" class="warrapInput">
                    <p><span>email</span>&#x0003A; {{ userEmail[0].email }}</p>
                    <label for="password">Password</label>
                    <input id="password" type="password" v-model="passoword" />
                    <button @click="setPassoword">Sign in</button>
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

import { ref, reactive } from 'vue';

const email = ref(null);
const passoword = ref(null);

const userEmail = reactive([]);
const userPassoword = reactive([]);

const input = ref(null);

const validUser = {
    online: false,
};

function setEmail() {
    if (input.value.checkValidity()) {
        userEmail.push({
            email: email.value
        })
    }
}
function setPassoword() {
    userPassoword.push({
        email: passoword.value
    })
    
    validUser.online = true;
    console.log(validUser)
}

</script>






























<style scoped lang="scss" src="./login.scss" />
