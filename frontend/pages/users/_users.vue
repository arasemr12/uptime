<template>
    <div class="flex flex-col w-full items-center h-full justify-center" v-if="user">
        <div class="flex flex-col w-full items-center gap-5">
            <i class="fa-solid fa-user fa-2x bg-gray-800 py-4 px-4 rounded-full"></i>
            <span class="text-gray-500">{{user.email}}</span>
            <span class="text-xl font-bold">@{{user.username}}</span>
        </div>
    </div>
    <div v-else>
        <div class="err" v-if="error">
            {{error}}
        </div>
    </div>
</template>

<script>
export default {
    data:() => {
        return{
            user:null,
            error:null
        }
    },
    async created(){
        let userid = this.$route.params.users;
        if(userid == "@me") {
            if(!this.$auth.loggedIn) return this.$router.push("/login");

            let res = await this.$axios.get(`/api/users/${this.$auth.user._id}`);
            res = res.data;

            if(!res.success) return this.error = res.message;

            this.user = res.user;
            return;
        }

        let res = await this.$axios.get(`/api/users/${userid}`);
        res = res.data;

        if(!res.success) return this.error = res.message;

        this.user = res.user;
    },
    methods:{
        async fallow(){
            if(!this.user || !this.$auth.loggedIn) return;
            let res = await this.$axios.get("/api/users/"+this.user._id+"/fallow");
            let data = res.data;

            this.btn(data.fallowing);
        },
        async btn(ty){
            let fbtn = await this.$refs.fallow;

            if(ty) {
                this.$refs.fallow.classList.add("red-btn");
                this.$refs.fallow.classList.remove("green-btn");
                this.$refs.fallow.innerText = "unfollow";
            }else{
                this.$refs.fallow.classList.remove("red-btn");
                this.$refs.fallow.classList.add("green-btn");
                this.$refs.fallow.innerText = "follow";
            }
        }
    }
}
</script>