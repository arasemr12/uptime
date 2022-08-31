<template>
  <div class="w-full h-full">
    <main class="justify-center w-full h-full">
        <div class="cont w-full flex flex-col items-center justify-between gap-5">
            <h1 class="text-4xl font-bold">Login.</h1>
            <form action="/login" @submit.prevent="logindata" method="post">
                <div>
                    <label for="email">Email.</label>
                    <input type="email" name="email" id="email" v-model="login.email" autocomplete="off" placeholder="email" required>
                </div>
                <div>
                    <label for="password">Password.</label>
                    <input type="password" name="password" id="password" v-model="login.password" autocomplete="off" placeholder="password" required>
                </div>
                <div>
                    <span>If you don't have account <nuxt-link class="link" to="/register">Register</nuxt-link>.</span>
                </div>
                <div>
                    <button class="btn2 flex flex-row items-center justify-between" type="submit">Login! <span :class="`loading border-white ${loading ? '' : 'hidden'}`"></span></button>
                </div>
                <div class="err" :class="`${error ? 'opacity-100 visible' : 'opacity-0 invisible'}`">
                    {{error}}
                </div>
            </form>
        </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'login',
    data() {
        return {
            error:'',
            loading:false,
            login: {
                email: '',
                password: ''
            }
        }
    },
    methods:{
        async logindata(){
            this.error = null;
            this.loading = true;

            let response = await this.$auth.loginWith('local', { data: this.login });

            if(!response.data.success) {
                this.error = response.data.message;
                return this.loading = false;
            }

            this.$router.push("/");
        }
    }
}
</script>
