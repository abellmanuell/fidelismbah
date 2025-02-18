<script setup>
import Heading_2 from "@/components/basket/Heading_2.vue";
import Paragraph from "@/components/basket/Paragraph.vue";

import ap1 from "@/assets/ap1.png";
import ap2 from "@/assets/ap2.png";
import ap3 from "@/assets/ap3.png";
import ap4 from "@/assets/ap4.png";
import { cn } from "../utils/cn";
</script>

<template>
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
