<template>
  <section :class="cn('py-32 px-4 lg:px-40')">
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
        description="Gunmen have killed more than a hundred people during multiple attacks on about 20 communities in Nigeria’s north central Plateau state. The attackers also burnt down houses and destroyed properties in the area. The west African nation has been faced with increased violence, and kidnappings in recent years. Fidelis Mbah Reports from the capital city, Abuja."
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
        <Paragraph class-name="font-bold"> My latest blogs </Paragraph>
      </div>

      <Carousel
        :value="products"
        :numVisible="2"
        :numScroll="3"
        :responsiveOptions="responsiveOptions"
      >
        <template #item="slotProps">
          <div
            class="shadow border-surface-200 dark:border-surface-700 rounded m-2 p-4"
          >
            <div>
              <img :src="slotProps.data.src" alt="Fidelis" class="rounded" />
            </div>

            <div class="mt-4">
              <Paragraph class-name="text-center">{{
                slotProps.data.description
              }}</Paragraph>
            </div>
            <hr class="my-4 text-primary-200" />
            <div class="text-center text-sm">
              <Heading_2
                class-name="!text-sm"
                :content="slotProps.data.author"
              />
              <i class="text-primary-400">{{ slotProps.data.designation }}</i>
            </div>
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
    src: testimonial,
    description:
      "id id sapien dui Sed dignissim, Morbi varius vitae non.tincidunt Lorem sit elit amet, lacus tincidunt ex. ullaat dui at vitae Sed nisl. dolor efficitur. nisi ipsum elit lacus",
    author: "Fidelis Mbah",
    designation: "Nigerian Health Watch, Director of Programmes",
  },
  {
    src: testimonial,
    description:
      "id id sapien dui Sed dignissim, Morbi varius vitae non.tincidunt Lorem sit elit amet, lacus tincidunt ex. ullaat dui at vitae Sed nisl. dolor efficitur. nisi ipsum elit lacus",
    author: "Fidelis Mbah",
    designation: "Nigerian Health Watch, Director of Programmes",
  },
  {
    src: testimonial,
    description:
      "id id sapien dui Sed dignissim, Morbi varius vitae non.tincidunt Lorem sit elit amet, lacus tincidunt ex. ullaat dui at vitae Sed nisl. dolor efficitur. nisi ipsum elit lacus",
    author: "Fidelis Mbah",
    designation: "Nigerian Health Watch, Director of Programmes",
  },
];
</script>
