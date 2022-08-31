<template>
    <div class="w-full h-full">
        <main class="justify-center w-full h-full">
            <div class="cont w-full flex flex-col gap-5">
                <h1 class="text-4xl font-bold">Panel</h1>
                <span class="text-gray-400">Welcome to panel.</span>
                <div class="w-full border-2 border-gray-800 py-2 px-4 rounded-full flex flex-col" v-for="uptime in uptimes" :key="uptime._id">
                    <nuxt-link :to="`/panel/uptimes/${uptime._id}`" class="text-xl">{{uptime.name}}</nuxt-link>
                    <span class="text-gray-400">{{uptime.url}}</span>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name:'uptimes',
    async created(){
        let res = await this.$axios.get("/api/uptimes");
        let data = res.data;
        if(!data.success) return this.error = data.message;

        this.uptimes = data.uptimes;
    },
    data:() => {
        return{
            uptimes:[],
            error:null
        }
    },
    methods:{

    }
}
</script>
