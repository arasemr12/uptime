<template>
    <nav id="nav" :class="`w-full flex flex-row items-center justify-center fixed bg-gray-800 bg-opacity-50 backdrop-blur-sm ${border ? 'border-b-2 border-gray-700' : ''}`">
        <div class="w-full lg:w-4/5 py-6 px-6 flex flex-col lg:flex-row items-center justify-between">
            <div :class="`flex flex-row items-center justify-between w-full lg:w-auto ${nav ? 'mb-8 lg:mb-0' : ''}`">
                <nuxt-link to="/"><h1 class="text-xl font-bold uppercase">Uptime</h1></nuxt-link>
                <i class="fa-solid fa-bars fa-2x lg:hidden cursor-pointer" @click="nav = !nav"></i>
            </div>
            <div v-if="$auth.loggedIn && nav" class="flex flex-col lg:flex-row items-center gap-5 w-full lg:w-auto">
                <nuxt-link class="btn1 w-full lg:w-auto" :to="`/users/@me`">@{{$auth.user.username}}</nuxt-link>
                <nuxt-link class="btn3 w-full lg:w-auto" to="/logout">Logout</nuxt-link>
                <nuxt-link class="btn2 w-full lg:w-auto" to="/panel">Panel</nuxt-link>
            </div>
            <div v-else-if="nav" class="flex flex-col lg:flex-row items-center gap-5 w-full lg:w-auto">
                <nuxt-link class="btn1 w-full lg:w-auto" to="/login">Login</nuxt-link>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data:() => {
        return{
            nav:true,
            border:false
        }
    },
    created(){
        setInterval(() => {
            if(!globalThis["window"]) return;
            let y = window.scrollY;
            if(y > 0) this.border = true;
            else this.border = false;
        }, 1);
    }
}
</script>