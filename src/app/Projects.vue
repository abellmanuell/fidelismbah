<template>
  <Navigationbar />
  <section :class="cn('px-5 py-20 lg:py-40 lg:px-40 ')">
    <div class="lg:w-[400px] text-center m-auto my-10">
      <Heading_1 class-name="mb-5" content="Projects and appearances" />
      <Paragraph>
        Defining moments and transformative projects that inspire change
      </Paragraph>
    </div>
  </section>

  <div class="mb-10">
    <img :src="project_image" alt="Project Image" class="w-full" />
  </div>

  <section :class="cn('px-5 py-20 lg:py-40 lg:px-40 lg:flex justify-between')">
    <div
      class="grid lg:grid-cols-[200px_200px] place-items-center gap-5 lg:space-y-4 lg:px-4 py-4 lg:py-0"
    >
      <div>
        <img :src="obi" alt="Peter Obi in conversation" />
      </div>
      <div>
        <span class="bg-primary-200 px-1">INTERVIEW</span>
        <Heading_2
          class-name="text-left"
          content="Establishing youth innovation foundations across states"
        />
        <Paragraph>
          a dive in to this captivating conversation as Fidelis Mbah interview’s
          Peter Obi, Labor party’s presidential candidate
        </Paragraph>
      </div>
    </div>

    <div
      class="grid lg:grid-cols-[200px_200px] place-items-center gap-5 lg:space-y-4 lg:px-4 py-4 lg:py-0"
    >
      <div>
        <img :src="obi" alt="Peter Obi in conversation" />
      </div>
      <div>
        <span class="bg-primary-200 px-1">INTERVIEW</span>
        <Heading_2
          class-name="text-left"
          content="Establishing youth innovation foundations across states"
        />
        <Paragraph>
          a dive in to this captivating conversation as Fidelis Mbah interview’s
          Peter Obi, Labor party’s presidential candidate
        </Paragraph>
      </div>
    </div>
  </section>

  <section :class="cn('pb-32 px-4 lg:px-40')">
    <div class="my-5">
      <div
        class="grid lg:grid-cols-[300px_auto] border-b py-2 gap-x-4 items-center space-y-4 lg:space-y-0"
      >
        <div>
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1"
          >
          </iframe>
        </div>
        <div>
          <Heading_2
            class-name="text-left text-black"
            content="Croatian Primer Minister forecast growth for his country"
          />
          <span class="text-sm text-primary-400 mb-2 block">Jan 26, 2024</span>
          <Paragraph class-name="text-primary-400">
            Quisque sodales. lacus ac sit diam ipsum vitae quam libero,
            efficitur. Cras adipiscing lorem. eu cursus Nunc sit nulla, ac
            placerat
          </Paragraph>
        </div>
      </div>

      <div
        class="grid lg:grid-cols-[300px_auto] mt-5 border-b py-2 gap-x-4 items-center space-y-4 lg:space-y-0"
      >
        <div>
          <iframe
            class="w-full h-full"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1"
          >
          </iframe>
        </div>
        <div>
          <Heading_2
            class-name="text-left text-black"
            content="Croatian Primer Minister forecast growth for his country"
          />
          <span class="text-sm text-primary-400 mb-2 block">Jan 26, 2024</span>
          <Paragraph class-name="text-primary-400">
            Quisque sodales. lacus ac sit diam ipsum vitae quam libero,
            efficitur. Cras adipiscing lorem. eu cursus Nunc sit nulla, ac
            placerat
          </Paragraph>
        </div>
      </div>
    </div>
    <div>
      <RouterLink
        to="/learn-more"
        class="text-sm py-2 px-4 rounded-full font-medium inline-block text-primary-500 border transition-all hover:bg-primary-500 hover:text-white"
      >
        <span> WATCH MORE VIDEOS</span>
        <v-icon name="pr-arrow-up-right" scale="1" />
      </RouterLink>
    </div>
  </section>
  <section
    :class="
      cn(
        ' bg-primary-300 h-screen flex items-center justify-center text-center'
      )
    "
  >
    <div class="w-[400px] space-y-4">
      <Heading_1
        content="Collaborate with Brands and Agenciesto create impactful results"
      />
      <div>
        <RouterLink
          to="/learn-more"
          class="text-sm py-2 px-4 rounded-full font-medium inline-block text-primary-500 border transition-all hover:bg-primary-500 hover:text-white"
        >
          <span>LEARN MORE</span>
          <v-icon name="pr-arrow-up-right" scale="1" />
        </RouterLink>
      </div>
    </div>
  </section>

  <!-- Foot component -->
  <Footer />
</template>

<script setup>
import { RouterLink } from "vue-router";
import Paragraph from "../components/basket/Paragraph.vue";
import Heading_1 from "../components/basket/Heading_1.vue";
import Heading_2 from "../components/basket/Heading_2.vue";
import { cn } from "../utils/cn";
import Navigationbar from "../components/basket/Navigationbar.vue";
import Footer from "../components/basket/Footer.vue";
import project_image from "@/assets/project-image.png";
import obi from "@/assets/obi.png";
</script>
