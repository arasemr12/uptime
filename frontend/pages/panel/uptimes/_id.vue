<template>
    <div v-if="uptime" class="w-full h-full pt-36">
        <div class="flex flex-col items-center w-full">
            <div class="h-full lg:w-4/5 w-full py-6 px-6">
                <div class="w-full flex flex-row items-center justify-between">
                    <h1 class="text-4xl font-bold mb-4">Panel</h1>
                    <a href="https://oceanbilisim.net/" class="link text-xl" target="_blank">oceanbilisim.net</a>
                </div>
                <span class="text-gray-400 mb-4">Welcome to panel.</span>
                <div class="w-full border-2 border-gray-800 py-2 px-4 rounded-full mb-4 flex flex-row items-center justify-between">
                    <div class="flex flex-col">
                        <h1 class="text-xl">{{uptime.name}}</h1>
                        <span class="text-gray-400">{{uptime.url}}</span>
                    </div>
                    <div v-if="res.length > 0" class="flex flex-col">
                        <span :class="`${res[res.length-1] ? res[res.length-1].success ? 'act' : 'actt' : ''}`">{{res[res.length-1].success ? "Active" : 'DeActive'}}</span>
                    </div>
                </div>
                <div class="w-full flex items-center justify-center">
                    <span class="loading"></span>
                </div>
                <div class="overflow-y-scroll w-full h-full">
                    <div class="w-full border-2 border-gray-800 py-2 px-4 rounded-lg mb-2" v-for="r in res" :key="Math.random()*1000">
                        <span class="text-gray-400">{{sec(r.time)}}</span>
                        <span>{{r.success ? 'Active.' : 'DeActive.'}}</span>
                        <span v-if="!r.success">{{r.res}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import loading from '../../../components/loading.vue';
export default {
  components: { loading },
    name:'uptimes',
    async created(){
        await this.fetch();
        setInterval(async() => {
            await this.fetch();
        }, 3000);
    },
    data:() => {
        return{
            uptime:null,
            error:null,
            res:null
        }
    },
    methods:{
        async fetch(){
            let id = this.$route.params.id;

            let res = await this.$axios.get("/api/uptimes/"+id);
            let data = res.data;

            if(!data.success) return this.error = data.message;

            this.uptime = data.uptime;
            this.res = data.res;
        },
        sec(ms){
            /*let secs = Math.floor(ms/1000);

            let mins = Math.floor(secs/60);

            let hours = Math.floor(mins/60);

            let days = Math.floor(hours/24);

            let months = Math.floor(days/30);

            let years = Math.floor(months/12);

            secs = secs%60;
            mins = mins%60;
            hours = hours%24;
            days = days%30;
            months = months%12;

            return `${years}/${months}/${days}/${hours}/${mins}/${secs}`;*/
            let time = new Date(ms);

            return time.toDateString() + " - " + time.toLocaleTimeString();
        }
    }
}
</script>
