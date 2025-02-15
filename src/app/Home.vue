<script setup>
import { RouterLink } from "vue-router";
import { cn } from "@/utils/cn";
import Navigationbar from "@/components/basket/Navigationbar.vue";
import Heading_1 from "@/components/basket/Heading_1.vue";
import Paragraph from "@/components/basket/Paragraph.vue";
import Heading_2 from "@/components/basket/Heading_2.vue";

import ap1 from "../assets/ap1.png";
import ap2 from "../assets/ap2.png";
import ap3 from "../assets/ap3.png";
import ap4 from "../assets/ap4.png";

const socialnetworks = [
  { icon: "bi-twitter", href: "#" },
  { icon: "pr-linkedin", href: "#" },
  { icon: "co-facebook", href: "#" },
  { icon: "bi-youtube", href: "#" },
  { icon: "bi-instagram", href: "#" },
];
</script>

<template>
  <Navigationbar />

  <section
    :class="
      cn(
        'relative bg-cover bg-center bg-no-repeat py-40 px-5 lg:px-40 lg:grid grid-cols-2',
        `bg-[url(/photocolage.svg)] h-screen`
      )
    "
  >
    <div
      class="absolute z-10 inset-0 bg-primary-500/80 lg:bg-primary-500/90"
    ></div>

    <div class="relative z-20 grid grid-rows-[auto_auto_auto] gap-10 lg:gap-5">
      <Heading_1
        content="Fidelis Mbah"
        class="!text-4xl text-white lg:!text-5xl"
      />

      <div class="text-white">
        <Paragraph class-name="text-xl">
          tempor cursus viverra Cras quis tincidunt tincidunt faucibus fringilla
          ullamcorper tincidunt Morbi efficitur. maximus Nam
        </Paragraph>
        <br />
        <Paragraph class-name="text-xl">
          sapien sit consectetur cursus consectetur eu diam eget quis ex
        </Paragraph>
        <br />
        <Paragraph class-name="text-primary-200">
          The ultrices Donec nec cursus in placerat vitae Donec Lorem est.
          sapien sit consectetur cursus consectetur eu diam eget quis ex
        </Paragraph>
      </div>

      <div>
        <RouterLink
          to="/learn-more"
          class="text-sm py-2 px-4 border border-white rounded-full font-bold text-white hover:bg-primary-500 transition-all"
        >
          <span> LEARN MORE </span>
          <v-icon name="pr-arrow-up-right" scale="1" />
        </RouterLink>
      </div>

      <div>
        <ul class="flex space-x-4 text-white">
          <li v-for="social of socialnetworks">
            <RouterLink :to="social.href">
              <v-icon :name="social.icon" scale="1.5" />
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section :class="cn('py-32 px-4 lg:px-40')">
    <div class="lg:w-96 m-auto text-center mb-15">
      <Heading_2 content="About Fidelis" />
      <Paragraph class="text-primary-500">
        dolor non. ex ipsum quam sollicitudin. Nunc ipsum amet, In luctus
        ultrices ac tempor dolor Ut
      </Paragraph>
    </div>

    <div class="grid space-y-16 lg:space-y-0 lg:grid-cols-2 place-items-center">
      <div>
        <div class="grid grid-cols-4 gap-2">
          <img :src="ap1" alt="ap1" class="w-20" />
          <img :src="ap2" alt="ap2" class="w-20" />
          <img :src="ap3" alt="ap2" class="w-20" />
          <img :src="ap4" alt="ap2" class="w-20" />
        </div>
      </div>

      <div>
        <Paragraph>
          amet, non. non lacus In elementum leo. Donec felis, cursus sit id
          tortor. elit. adipiscing Nunc urna. id Donec luctus Ut in ex at
          elementum elit volutpat eget
        </Paragraph>
        <br />
        <Paragraph>
          tincidunt ex convallis. malesuada id amet, eget placerat est. quam
          urna Nam varius vitae lacus tortor. gravida luctus Nunc Nam Nam ac
          convallis. amet, ex odio
        </Paragraph>
        <br />
        <Paragraph>
          amet, quis non lacus orci faucibus non diam massa ipsum Donec
          fringilla viverra elit Nam placerat. fringilla nibh felis, nisi nisl.
          Ut quis nulla, elit diam
        </Paragraph>
        <br />
        <Paragraph>
          eu tincidunt amet, quis laoreet facilisis Ut consectetur quis porta
          volutpat at, consectetur quam ultrices urna non tempor dolor placerat
          sapien ex quam sit
        </Paragraph>
      </div>
    </div>
  </section>
</template>
