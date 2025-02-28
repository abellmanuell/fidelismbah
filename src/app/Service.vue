<template>
  <Navigationbar />
  <section :class="cn('px-5 py-20 lg:py-40 lg:px-40 ')">
    <HeaderCaption
      title="Explore Our Comprehensive Services Tailored to Your Unique Needs"
      subTitle="Lorem ipsum dolor sit amet consectetur. Amet diam aliquam ut sem dolor
        sed enim. Ligula massa vitae adipiscing neque sollicitudin blandit"
    />

    <div class="flex flex-col-reverse lg:grid grid-cols-[150px_auto]">
      <ul class="flex lg:flex-col">
        <li v-for="service of services">
          <RouterLink
            to="#"
            class="flex flex-col items-center lg:mb-4 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white w-32 text-center p-2 text-sm"
          >
            <v-icon :name="service.icon" scale="2" />
            <span> {{ service.title }} </span>
          </RouterLink>
        </li>
      </ul>

      <div class="mb-10 lg:m-0">
        <div class="h-[400px]">
          <img src="/image.png" alt="" class="w-full h-[400px] object-cover" />
        </div>

        <Heading_3
          content="Public Communications"
          class-name="text-left text-sm my-4"
        />
        <Paragraph>
          Fidelis Mbah as an Expert communicator with a knacks for crafting
          compelling narratives and as a Public communicator, Fidelis is
          passionate about harnessing the power of storytelling to drive social
          change. Fidelis has worked with project tha explores the intersection
          of media, technology and society, sharing insights on effective
          communication and effective storytelling.
        </Paragraph>
        <br />
        <Heading_3
          content="What you’ll gain"
          class-name="text-left text-sm my-4"
        />
        <Paragraph>
          Building credibility and trust; achieving and promoting transparent
          communication that establishes trust with audience, stakeholder and
          the publc. Driving engagement and participation; fostering organic
          communication that builds and engage communities around shared
          interest values and goals.
        </Paragraph>
        <br />
      </div>
    </div>
  </section>

  <section>
    <LearnMore
      title="Start the conversation that will transform your Story, Brand and Events"
      :linkProps="{ name: 'LEARN MORE', href: '/learn-more' }"
    />
  </section>

  <!-- Foot component -->
  <Footer />
</template>

<script setup>
import { RouterLink } from "vue-router";
import Paragraph from "../components/basket/Paragraph.vue";
import Heading_1 from "../components/basket/Heading_1.vue";
import { cn } from "../utils/cn";
import Navigationbar from "../components/basket/Navigationbar.vue";
import Footer from "../components/basket/Footer.vue";
import Heading_3 from "../components/basket/Heading_3.vue";
import LearnMore from "../components/LearnMore.vue";
import HeaderCaption from "../components/HeaderCaption.vue";
const services = [
  {
    icon: "fa-regular-handshake",
    title: "Public Communications",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet diam aliquam ut sem dolor sed enim. Ligula massa vitae adipiscing neque sollicitudin blandit",
  },
  {
    icon: "fa-regular-handshake",
    title: "Public Communications",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet diam aliquam ut sem dolor sed enim. Ligula massa vitae adipiscing neque sollicitudin blandit",
  },
  {
    icon: "fa-regular-handshake",
    title: "Public Communications",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet diam aliquam ut sem dolor sed enim. Ligula massa vitae adipiscing neque sollicitudin blandit",
  },
  {
    icon: "fa-regular-handshake",
    title: "Public Communications",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet diam aliquam ut sem dolor sed enim. Ligula massa vitae adipiscing neque sollicitudin blandit",
  },
  {
    icon: "fa-regular-handshake",
    title: "Public Communications",
    description:
      "Lorem ipsum dolor sit amet consectetur. Amet diam aliquam ut sem dolor sed enim. Ligula massa vitae adipiscing neque sollicitudin blandit",
  },
];
</script>
