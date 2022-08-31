<template>
    <div class="w-full h-full">
        <main class="justify-center w-full h-full">
            <div class="cont w-full flex flex-col gap-5">
                <h1 class="text-4xl font-bold">Panel</h1>
                <span class="text-gray-400">Welcome to panel.</span>
                <nuxt-link to="/panel/uptimes" class="btn2 flex flex-row items-center justify-between w-full">See your uptimes..<i class="fa-solid fa-eye"></i></nuxt-link>
                <nuxt-link to="/panel/add" class="btn2 flex flex-row items-center justify-between w-full">Add new uptime.<i class="fa-solid fa-plus"></i></nuxt-link>
            </div>
        </main>
    </div>
</template>

<script>
export default {
    name:'panel'
}
</script>
