<template>
  <section
    class="px-4 pt-10 pb-2 lg:px-32 md:pt-40 md:px-20"
    v-motion-slide-visible-bottom
  >
    <HeaderCaption
      title="Client Testimonial"
      subTitle="Words from client’s who have experienced the value of my Journalism
        skills, work ethic and collaborative spirit"
    />

    <Carousel
      :value="products"
      :numVisible="3"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      :autoplayInterval="3000"
      circular
    >
      <template #item="slotProps">
        <div
          class="shadow-lg border-surface-200 dark:border-surface-700 rounded m-2 p-4 h-[300px] flex justify-center items-center flex-col"
        >
          <div></div>

          <div class="mt-4">
            <Paragraph class-name="text-center">{{
              slotProps.data.description
            }}</Paragraph>
          </div>
          <hr class="my-4 text-primary-200" />
          <div class="text-center text-sm">
            <Heading_2 class-name="!text-sm" :content="slotProps.data.author" />
            <i class="text-primary-400">{{ slotProps.data.designation }}</i>
          </div>
        </div>
      </template>
    </Carousel>
  </section>
</template>

<script setup>
import { ref } from "vue";
import Heading_2 from "../components/basket/Heading_2.vue";
import Paragraph from "../components/basket/Paragraph.vue";
import HeaderCaption from "./HeaderCaption.vue";
const products = [
  {
    src: "testimonial1",
    description:
      "Weaver of words, teller of tales; exploring the human conditions through fiction, poetry and non fiction. Fidelis is a word smith and creative explorer, where words come alive",
    author: "Omolara Adebayo",
    designation: "The Green Political Foundation Heinrich Böll Foundation",
  },
  {
    src: "testimonial1",
    description:
      "Fidelis is dedicated to sharing stories that matter, amplifying marginalized voices and exploring the impact of technology on society.",
    author: "Adaora Nnenna Okoro",
    designation: "Media Planning Centre for the Right to Health",
  },
  {
    src: "testimonial1",
    description:
      "Fidelis has played a crucial role in shaping the cultural landscape; creating contents that reflects challenges and inspires society today",
    author: "Don Fetus",
    designation:
      "Communications Coordinator Development Partnership International",
  },
  {
    src: "testimonial1",
    description:
      "Fidelis is dedicated to sharing stories that matter, amplifying marginalized voices and exploring the impact of technology on society.",
    author: "Ahkere Kelvin",
    designation: "Media Planning Centre for the Right to Health",
  },
  {
    src: "testimonial1",
    description:
      "Fidelis has played a crucial role in shaping the cultural landscape; creating contents that reflects challenges and inspires society today",
    author: "Patience Olabode",
    designation:
      "Communications Coordinator Development Partnership International",
  },
  {
    src: "testimonial1",
    description:
      "“I have seen Fidelis’ fruition and how he receives positive feedback and credibility from clients and audiencesthat is incredibly fulfilling”",
    author: "Mohammed Abubakar",
    designation: "Mentorship programme for journalists Akuko Foundation",
  },
];

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
</script>
