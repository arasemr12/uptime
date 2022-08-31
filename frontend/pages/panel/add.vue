<template>
    <div class="w-full h-full">
        <main class="justify-center w-full h-full">
            <div class="cont w-full flex flex-col gap-5">
                <h1 class="text-4xl font-bold">Panel</h1>
                <span class="text-gray-400">Welcome to panel.</span>
                <form action="/panel/add" @submit.prevent="add" method="post">
                    <div>
                        <label for="name">name</label>
                        <input type="text" name="name" id="name" autocomplete="off" v-model="name" required placeholder="Awesome website.">
                    </div>
                    <div>
                        <label for="url">url</label>
                        <input type="url" name="url" id="url" autocomplete="off" v-model="url" required placeholder="http://">
                    </div>
                    <div>
                        <button type="submit" class="btn2">Add!</button>
                    </div>
                </form>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name:'add',
    data:() => {
        return{
            name:null,
            url:null
        }
    },
    methods:{
        async add(){
            let res = await this.$axios.post("/api/uptimes/add",{
                name:this.name,
                url:this.url
            });
            let data = res.data;

            if(!data.success) return this.error = data.message;
            this.$router.push(`/panel/uptimes/${data.uptime._id}`);
        }
    }
}
</script>
