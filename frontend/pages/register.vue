<template>
  <div class="w-full h-full">
    <main class="justify-center w-full h-full">
        <div class="cont w-full flex flex-col items-center justify-between gap-5">
            <h1 class="text-4xl font-bold">Register.</h1>
            <form action="/login" @submit.prevent="registerdata" method="post">
                <div>
                    <label for="email">Email.</label>
                    <input type="email" name="email" id="email" v-model="register.email" autocomplete="off" placeholder="email" required>
                </div>
                <div>
                    <label for="username">Username.</label>
                    <input type="text" name="username" id="username" v-model="register.username" autocomplete="off" placeholder="email" required>
                </div>
                <div>
                    <label for="password">Password.</label>
                    <input type="password" name="password" id="password" v-model="register.password" autocomplete="off" placeholder="password" required>
                </div>
                <div>
                    <span>If you have account <nuxt-link class="link" to="/login">Login</nuxt-link>.</span>
                </div>
                <div>
                    <button class="btn2 flex flex-row items-center justify-between" type="submit">Register! <span :class="`loading border-white ${loading ? '' : 'hidden'}`"></span></button>
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
            register: {
                email: '',
                username:'',
                password: ''
            }
        }
    },
    methods:{
        async registerdata(){
            this.error = null;
            this.loading = true;

            let res = await this.$axios.post("/api/auth/register",this.register);

            if(!res.data.success) {
                this.error = res.data.message;
                return this.loading = false;
            }

            this.$router.push("/login");
        }
    }
}
</script>
