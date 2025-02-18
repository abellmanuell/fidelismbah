<script setup>
import logo from "@/assets/fidelis.png";
import { cn } from "../../utils/cn";
import Paragraph from "./Paragraph.vue";
import Heading_2 from "./Heading_2.vue";

const socialnetworks = [
  { icon: "bi-twitter", href: "#" },
  { icon: "pr-linkedin", href: "#" },
  { icon: "co-facebook", href: "#" },
  { icon: "bi-youtube", href: "#" },
  { icon: "bi-instagram", href: "#" },
];
</script>

<template>
  <section :class="cn('py-20 px-4 lg:px-40 lg:flex justify-between')">
    <div class="space-y-8">
      <div class="h-[20%] flex">
        <img :src="logo" alt="Fidelis Logo" />
      </div>

      <Paragraph>
        tempor cursus viverra Cras quis tincidunt <br />
        tincidunt faucibus fringilla ullamcorper <br />
        tincidunt Morbi efficitur.
      </Paragraph>

      <div>
        <RouterLink
          to="/learn-more"
          class="text-sm py-2 px-4 rounded-full font-medium inline-block text-primary-500 border transition-all hover:bg-primary-500 hover:text-white"
        >
          <span> GET IN TOUCH</span>
          <v-icon name="pr-arrow-up-right" scale="1" />
        </RouterLink>
      </div>

      <div>
        <ul class="flex space-x-4">
          <li v-for="social of socialnetworks">
            <RouterLink :to="social.href">
              <v-icon :name="social.icon" scale="1.5" />
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex space-x-10">
      <div class="mt-20 lg:mt-0">
        <div>
          <Heading_2 class-name="text-red-500 text-left" content="Services" />
          <ul class="text-sm space-y-4">
            <li>
              <RouterLink to=""> Documentary Film Making </RouterLink>
            </li>

            <li>
              <RouterLink to=""> Speaking </RouterLink>
            </li>

            <li>
              <RouterLink to=""> Media Training </RouterLink>
            </li>

            <li>
              <RouterLink to=""> Cooperate PR & Branding </RouterLink>
            </li>

            <li>
              <RouterLink to=""> Private Interview </RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-20 lg:mt-0">
        <div>
          <Heading_2 class-name="text-red-500 text-left" content="Pages" />
          <ul class="text-sm space-y-4">
            <li>
              <RouterLink to=""> About </RouterLink>
            </li>

            <li>
              <RouterLink to=""> Services </RouterLink>
            </li>

            <li>
              <RouterLink to=""> Projects </RouterLink>
            </li>

            <li>
              <RouterLink to=""> Blogs </RouterLink>
            </li>

            <li>
              <RouterLink to=""> Contact </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
