<template>
  <Navigationbar />
  <section :class="cn('px-5 py-20 lg:py-40 lg:px-40 ')">
    <div class="w-[400px] text-center m-auto my-10">
      <Heading_1
        class-name="mb-5"
        content="Explore Our Comprehensive Services Tailored to Your Unique Needs"
      />
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur. Amet diam aliquam ut sem dolor
        sed enim. Ligula massa vitae adipiscing neque sollicitudin blandit
      </Paragraph>
    </div>

    <div class="flex flex-col-reverse lg:grid grid-cols-[150px_auto]">
      <ul class="grid grid-cols-3 gap-2 lg:block lg:space-y-4">
        <li v-for="service of services">
          <RouterLink
            to="#"
            class="flex flex-col items-center space-x-2 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white w-32 text-center p-4 text-sm"
          >
            <v-icon name="fa-regular-handshake" scale="2" />
            <span> {{ service.title }} </span>
          </RouterLink>
        </li>
      </ul>

      <div class="my-5 lg:m-0">
        <div class="h-[400px]">
          <img src="/image.png" alt="" class="w-full h-[400px] object-cover" />
        </div>

        <Heading_3 content="Speaking" class-name="text-left text-sm my-4" />
        <Paragraph>
          Speakingamet, id Ut eget tempor vehicula, Quisque Nullam libero, ex.
          placerat felis, Cras varius Sed lacus, eget massa ex Vestibulum urna.
          eu nulla, Nam eget lacus, Nam vel vitae non vitae faucibus Ut
          tincidunt quam eget nulla, ultrices amet, ex
        </Paragraph>
        <br />
        <Paragraph>
          scelerisque faucibus nisi quam elit Donec lacus, amet, nibh odio elit.
          nisi ex sollicitudin. enim. urna laoreet dui sollicitudin. tincidunt
          Donec quis elit. at, tincidunt ac turpis facilisis malesuada sodales.
          lacus, In ipsum scelerisque
        </Paragraph>
        <br />
        <Paragraph>
          Donec urna. sapien Donec urna varius ex Nunc viverra risus ac urna.
          leo. eget consectetur tempor in ullamcorper non efficitur. dignissim,
          diam luctus odio facilisis fringilla Nullam felis, leo. faucibus nibh
          sollicitudin. Quisque non. non
        </Paragraph>
      </div>
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
import { cn } from "../utils/cn";
import Navigationbar from "../components/basket/Navigationbar.vue";
import Footer from "../components/basket/Footer.vue";
import Heading_3 from "../components/basket/Heading_3.vue";
import Testimonial from "../components/Testimonial.vue";

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
