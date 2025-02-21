<template>
  <Navigationbar />
  <section
    :class="
      cn(
        'relative bg-cover bg-center bg-no-repeat px-5 py-40 lg:px-40 lg:grid grid-cols-2',
        `bg-[url(/photocolage.svg)] h-screen flex items-end justify-center`
      )
    "
  >
    <div
      class="absolute z-10 inset-0 bg-primary-500/80 lg:bg-primary-500/90"
    ></div>

    <div class="relative z-20 flex text-white flex-col justify-end">
      <Paragraph>About</Paragraph>
      <Heading_1
        content="Fidelis Mbah"
        class="!text-4xl text-white lg:!text-5xl"
      />
    </div>
  </section>

  <section class="px-5 lg:px-80 py-20 lg:py-40 bg-primary-500/90 text-white">
    <Heading_1
      content="About Me"
      class="!text-3xl lg:!text-4xl mb-5 text-white"
    />
    <Paragraph class="text-white">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit,
      vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus,
      ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique,
      tortor mauris molestie elit, et luctus enim justo nec erat. Aliquam erat
      volutpat. Donec eleifend lectus at sem scelerisque accumsan. Suspendisse
      sit amet metus sit amet diam ultrices porta.
    </Paragraph>
    <br />
    <Paragraph>
      Praesent non adipiscing libero. Nullam sit amet arcu laoreet, fringilla
      lorem sit amet, fermentum nisl. Nam lacinia velit in est posuere, in
      venenatis ligula pellentesque. Donec et iaculis tellus. Vivamus luctus
      eros aliquet convallis ultricies. Mauris vel tellus non nunc mattis
      lobortis. Nam ut erat sit amet libero auctor semper.
    </Paragraph>
  </section>

  <section
    :class="
      cn(' bg-white h-screen flex items-center justify-center text-center')
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

  <section :class="cn('py-32 lg:px-0')">
    <div class="lg:w-96 m-auto text-center mb-15">
      <Heading_2 content="Key achievement and recognition" />
      <Paragraph class="text-primary-500">
        Recognition for commitment to truth and storytelling, highlighting
        exceptional reporting in the field of Journalism
      </Paragraph>
    </div>

    <div
      class="grid lg:grid-cols-3 grid-rows-3 lg:grid-rows-1 bg-primary-300 px-20 py-10 lg:px-40 lg:py-10 gap-10"
    >
      <div class="border p-4 flex flex-col items-center justify-center h-80">
        <Paragraph> sodales. ex. tortor. libero, Nunc </Paragraph>
        <br />
        <Paragraph>
          dolor non. ex ipsum quam sollicitudin. Nunc ipsum amet, In luctus
          ultrices ac tempor dolor Ut
        </Paragraph>
      </div>

      <div class="border p-4 flex flex-col items-center justify-center h-80">
        <Paragraph> sodales. ex. tortor. libero, Nunc </Paragraph>
        <br />
        <Paragraph>
          dolor non. ex ipsum quam sollicitudin. Nunc ipsum amet, In luctus
          ultrices ac tempor dolor Ut
        </Paragraph>
      </div>

      <div class="border p-4 flex flex-col items-center justify-center h-80">
        <Paragraph> sodales. ex. tortor. libero, Nunc </Paragraph>
        <br />
        <Paragraph>
          dolor non. ex ipsum quam sollicitudin. Nunc ipsum amet, In luctus
          ultrices ac tempor dolor Ut
        </Paragraph>
      </div>
    </div>
  </section>

  <section :class="cn('py-32 lg:px-0')">
    <div class="lg:w-96 m-auto text-center mb-15">
      <Heading_2 content="Media appearance" />
      <Paragraph class="text-primary-500">
        Words from client’s who have experienced the value of my Journalism
        skills, work ethic and collaborative spirit
      </Paragraph>
    </div>

    <div
      class="bg-primary-500 px-20 py-10 lg:px-40 lg:py-10 bg-[url(/pattern.svg)]"
    >
      <div
        class="bg-white grid lg:grid-cols-3 grid-rows-3 lg:grid-rows-1 gap-10 p-10"
      >
        <div class="border p-4 flex flex-col items-center justify-center h-60">
          <div class="flex items-center justify-center bg-red-500 w-full">
            <img src="/image.png" alt="CCN" />
          </div>
          <br />
          <Paragraph>
            dolor non. ex ipsum quam sollicitudin. Nunc ipsum amet, In luctus
            ultrices ac tempor dolor Ut
          </Paragraph>
        </div>

        <div class="border p-4 flex flex-col items-center justify-center h-60">
          <div class="flex items-center justify-center bg-[#FD9927] w-full">
            <img src="/image2.png" alt="CCN" />
          </div>
          <br />
          <Paragraph>
            dolor non. ex ipsum quam sollicitudin. Nunc ipsum amet, In luctus
            ultrices ac tempor dolor Ut
          </Paragraph>
        </div>

        <div class="border p-4 flex flex-col items-center justify-center h-60">
          <div class="flex items-center justify-center bg-[#BFAE62] w-full">
            <img src="/image3.png" alt="CCN" />
          </div>
          <br />
          <Paragraph>
            dolor non. ex ipsum quam sollicitudin. Nunc ipsum amet, In luctus
            ultrices ac tempor dolor Ut
          </Paragraph>
        </div>
      </div>
    </div>
  </section>

  <!-- Testimonial component -->
  <Testimonial />

  <section
    :class="
      cn(
        ' bg-primary-200 h-screen flex items-center justify-center text-center'
      )
    "
  >
    <div class="w-[400px] space-y-4">
      <Heading_1
        content="Start the conversation that will transform your Story, Brand and Events"
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
import Heading_2 from "../components/basket/Heading_2.vue";
import Testimonial from "../components/Testimonial.vue";
</script>
