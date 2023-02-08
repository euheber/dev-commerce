<template>
    <section class="containerLogin">

        <div class="warrap">
            <div class="login">
                <h2>Sign in</h2>
                <label for="email">E-mail</label>
                <input id="email" type="text" required />
                <button>Continue</button>

                <p> By continuing, you agree to the <span>Online
                        Shopping Store Terms of
                        Use.</span></p>


                <details>
                    <summary>Need help?</summary>
                    <p>I forgot the password.</p>
                    <p>Other problems with access.</p>
                </details>

            </div>
        </div>

    </section>
</template>
<script setup>
import { RouterLink } from 'vue-router';
</script>












<style scoped lang="scss" src="./login.scss" />
