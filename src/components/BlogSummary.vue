<template>
  <section :class="cn('py-20 px-4 lg:px-40')">
    <HeaderCaption
      title="Blog and Media"
      subTitle="Where Journalism meets perspective: My insight, analysis and commentary
        on stories that shapes our world"
    />

    <div>
      <Paragraph class-name="font-bold"> My latest updates </Paragraph>
    </div>

    <div class="my-5">
      <Thumbnail
        title="Emergency officials struggling to reach #MaiduguriFlood victims"
        description="Emergency officials in northeast #Nigeria struggling to access flooded areas as thousands trapped in their houses continue to call for help. Fidelis Mbah reports from #Maiduguri"
        src="https://www.youtube.com/embed/anJqub4vYz0?si=rDk8tQQSY9eOtYhI"
        date="Sep 15, 2024"
      />
      <Thumbnail
        title="Nigeria: Gunmen kill at least 113 people in central Plateau state"
        description="Gunmen have killed more than a hundred people during multiple attacks on about 20 communities in Nigeria’s north central Plateau state..."
        src="https://www.youtube.com/embed/EVoYHhkm1WU?si=eL_w7lQzJN-h_ScF"
        date="Dec 25, 2023"
      />
      <Thumbnail
        title="Nigeria: Buhari Faces Key Challenges after Medical Leave"
        description="President Muhammadu Buhari faces numerous challenges in Nigeria as he resumes duty after an extended medical leave in the U.K."
        src="https://www.youtube.com/embed/8sZoybLFeOQ?si=c5Kyu7BNl6czpCtJ"
        date="Aug 22, 2017"
      />
    </div>

    <LinkButton
      href="https://www.youtube.com/channel/UCup-hGpD17dxFfxhvOqDsMA/featured?view_as=subscriber"
      target="_blank"
      >WATCH MORE VIDEOS</LinkButton
    >

    <div class="mt-20">
      <div class="my-10">
        <Paragraph class-name="font-bold"> Other updates </Paragraph>
      </div>

      <Carousel
        :value="products"
        :numVisible="2"
        :numScroll="3"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <div
            class="shadow border-surface-200 dark:border-surface-700 rounded m-2 p-4 flex items-center justify-center flex-col space-y-4"
          >
            <div>
              <img :src="slotProps.data.src" alt="Fidelis" class="rounded" />
            </div>

            <div class="mt-4">
              <Paragraph class-name="text-center">{{
                slotProps.data.description
              }}</Paragraph>
            </div>
            <a
              :href="slotProps.data.href"
              class="bg-primary-500 text-white p-4 rounded-full w-[50px] h-[50px] flex justify-center items-center -bottom-2"
            >
              <v-icon name="pr-arrow-up-right" scale="1" />
            </a>
          </div>
        </template>
      </Carousel>
    </div>
  </section>
</template>

<script setup>
import { cn } from "../utils/cn";
import Heading_2 from "./basket/Heading_2.vue";
import Paragraph from "./basket/Paragraph.vue";
import testimonial from "../assets/testimonial.jpg";
import { ref } from "vue";
import HeaderCaption from "./HeaderCaption.vue";
import Thumbnail from "./Thumbnail.vue";
import LinkButton from "./LinkButton.vue";
import { RouterLink } from "vue-router";

const responsiveOptions = ref([
  {
    breakpoint: "1400px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 1,
  },
  {
    breakpoint: "767px",
    numVisible: 2,
    numScroll: 1,
  },
  {
    breakpoint: "575px",
    numVisible: 1,
    numScroll: 1,
  },
]);

const products = [
  {
    src: "https://www.aljazeera.com/wp-content/uploads/2020/12/000_8WF7Q7.jpg?resize=770%2C513&quality=80",
    description:
      "Old rivals square up again in Ghana’s tight presidential election",
    author: "Fidelis Mbah",
    designation: "Nigerian Health Watch, Director of Programmes",
    href: "https://www.aljazeera.com/news/2020/12/5/old-rivals-square-up-again-in-ghanas-tight-presidential-election",
  },
  {
    src: "https://www.aljazeera.com/wp-content/uploads/2020/11/AP_20334577600389.jpg?resize=770%2C513&quality=80",
    description:
      "‘Unrelenting’ insecurity: Nigeria reels after massacre of farmers",
    author: "Fidelis Mbah",
    designation: "Nigerian Health Watch, Director of Programmes",
    href: "https://www.aljazeera.com/news/2020/11/30/unrelenting-insecurity-nigeria-reels-after-attack",
  },
  {
    src: "https://www.aljazeera.com/wp-content/uploads/2020/10/h_56421256.jpg?resize=770%2C513&quality=80",
    description: "Inquiry probes shooting of Lagos protesters, police abuses",
    author: "Fidelis Mbah",
    designation: "Nigerian Health Watch, Director of Programmes",
    href: "https://www.aljazeera.com/news/2020/10/26/judicial-inquiry-begin-in-lagos-to-probe-police-brutality",
  },
  {
    src: "https://www.aljazeera.com/wp-content/uploads/2020/12/image-45.jpg?resize=730%2C410&quality=80",
    description: "Nigeria steps up efforts to rescue 300 abducted pupils: Live",
    author: "Fidelis Mbah",
    designation: "Nigeria steps up efforts to rescue 300 abducted pupils: Live",
    href: "https://www.aljazeera.com/news/2020/12/14/nigeria-steps-up-rescue-efforts-for-300-abducted-pupils-live",
  },
];
</script>
