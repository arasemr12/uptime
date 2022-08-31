<template>
  <div class="w-full h-full">
    <main class="justify-center w-full h-full">
        <div class="cont w-full flex flex-col lg:flex-row items-center justify-between">
            <h1 class="text-4xl font-bold">The best uptime website.</h1>
            <div class="flex flex-col gap-5">
                <span class="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium odit magnam excepturi quis accusantium quidem numquam? Dolore tenetur repellat hic ipsum eligendi, expedita nostrum magnam ratione nulla sequi, reiciendis est.</span>
                <nuxt-link class="btn2" to="/">Pricing and Plans.</nuxt-link>
            </div>
        </div>
    </main>
    <main class="justify-center">
        <div class="cont w-full flex flex-col items-center">
            <img draggable="false" src="https://technext.github.io/Safia/v1.0.1/assets/img/gallery/dashboard.png" class="w-full" alt="">
        </div>
    </main>
    <main class="justify-center">
        <div class="cont flex flex-col items-center gap-10">
            <h1 class="text-xl font-bold">Sponsors</h1>
            <div class="w-full flex flex-row items-center flex-wrap justify-center gap-20">
                <img class="sponsor" src="https://technext.github.io/Safia/v1.0.1/assets/img/gallery/brands/google.png" alt="">
                <img class="sponsor" src="https://technext.github.io/Safia/v1.0.1/assets/img/gallery/brands/slack.png" alt="">
                <img class="sponsor" src="https://technext.github.io/Safia/v1.0.1/assets/img/gallery/brands/amazon.png" alt="">
                <img class="sponsor" src="https://technext.github.io/Safia/v1.0.1/assets/img/gallery/brands/zoom.png" alt="">
                <img class="sponsor" src="https://technext.github.io/Safia/v1.0.1/assets/img/gallery/brands/netflix.png" alt="">
            </div>
            <span class="hr"></span>
        </div>
    </main>
    <main>
        <div class="cont flex flex-col">
            <h1 class="text-4xl font-bold mb-4">Features</h1>
            <span class="text-gray-400 mb-4">Why you need select we?</span>
            <div class="w-full flex flex-col flex-wrap items-center justify-center gap-6">
                <div class="flex flex-col lg:flex-row items-center w-full justify-center gap-6">
                    <div class="feature">
                        <i class="fa-solid fa-chart-line fa-2x"></i>
                        <h1 class="text-xl">Dashboard</h1>
                        <span class="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestias aliquid, vitae, blanditiis delectus in voluptas, sequi ea voluptatibus quis iure eaque perspiciatis impedit suscipit accusantium ratione quia laborum odit!</span>
                    </div>
                    <div class="feature">
                        <i class="fa-solid fa-chart-line fa-2x"></i>
                        <h1 class="text-xl">Dashboard</h1>
                        <span class="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestias aliquid, vitae, blanditiis delectus in voluptas, sequi ea voluptatibus quis iure eaque perspiciatis impedit suscipit accusantium ratione quia laborum odit!</span>
                    </div>
                </div>
                <div class="flex flex-col lg:flex-row items-center w-full justify-center gap-6">
                    <div class="feature">
                        <i class="fa-solid fa-chart-line fa-2x"></i>
                        <h1 class="text-xl">Dashboard</h1>
                        <span class="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestias aliquid, vitae, blanditiis delectus in voluptas, sequi ea voluptatibus quis iure eaque perspiciatis impedit suscipit accusantium ratione quia laborum odit!</span>
                    </div>
                    <div class="feature">
                        <i class="fa-solid fa-chart-line fa-2x"></i>
                        <h1 class="text-xl">Dashboard</h1>
                        <span class="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore molestias aliquid, vitae, blanditiis delectus in voluptas, sequi ea voluptatibus quis iure eaque perspiciatis impedit suscipit accusantium ratione quia laborum odit!</span>
                    </div>
                </div>
            </div>
        </div>
    </main>
  </div>
</template>

<script>
import loading from '../components/loading.vue'
export default {
  components: { loading },
  name: 'index' 
}
</script>
