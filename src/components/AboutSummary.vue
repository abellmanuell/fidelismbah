<script setup>
import Paragraph from "@/components/basket/Paragraph.vue";
import { RouterLink } from "vue-router";

import ap1 from "@/assets/ap1.png";
import ap2 from "@/assets/ap2.png";
import ap3 from "@/assets/ap3.png";
import ap4 from "@/assets/ap4.png";
import { cn } from "../utils/cn";
import HeaderCaption from "./HeaderCaption.vue";
</script>

<template>
  <section :class="cn('py-32 px-4 lg:px-20')">
    <HeaderCaption
      title="About Fidelis"
      subTitle="Award winning international Journalist and a correspondent with Al Jazeera
      English television"
    />

    <div
      class="grid space-y-16 lg:space-y-0 lg:grid-cols-2 place-items-center gap-10"
    >
      <div>
        <div class="grid grid-cols-4 gap-2">
          <img :src="ap1" alt="ap1" class="h-full" />
          <img :src="ap2" alt="ap2" class="h-full" />
          <img :src="ap3" alt="ap2" class="h-full" />
          <img :src="ap4" alt="ap2" class="h-full" />
        </div>
      </div>

      <div>
        <Paragraph class="!text-black">
          Fidelis Mbah is an award-winning international journalist with more
          than two decades of reporting and interviewing influential
          personalities across the world.
        </Paragraph>
        <br />
        <Paragraph class="!text-black">
          He is also a multimedia consultant, public communications expert,
          policy strategist, and brand expert.
        </Paragraph>
        <br />
        <Paragraph class="!text-black">
          Fidelis is presently a correspondent with Al Jazeera English
          Television. He was recently elected as the deputy President of
          International Press Institute (IPI) Nigeria chapter.
        </Paragraph>
        <br />
        <Paragraph class="!text-black">
          He has also worked as News Correspondent of the BBC World Service in
          Africa and the U.K
        </Paragraph>
        <br />
        <br />
        <div>
          <RouterLink
            to="/learn-more"
            class="text-sm py-3 px-6 border border-primary-500 rounded-full font-bold text-primary-500 hover:text-white hover:bg-primary-500 transition-all"
          >
            <span> Experience Fidelis’ Journey </span>
            <v-icon name="pr-arrow-up-right" scale="1" />
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>
