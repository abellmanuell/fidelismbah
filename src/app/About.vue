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
      Fidelis Mbah is an award-winning international journalist with more than
      two decades of reporting and interviewing influential personalities across
      the world.
      <br />
      He is also a multimedia consultant, public communications expert, policy
      strategist, and brand expert.
    </Paragraph>
    <br />
    <Paragraph>
      Fidelis is presently a correspondent with Al Jazeera English Television.
      He was recently elected as the deputy President of International Press
      Institute (IPI) Nigeria chapter.
    </Paragraph>
    <br />
    <Paragraph>
      He has also worked as News Correspondent of the BBC World Service in
      Africa and the U.K. , Africa Deputy Director at CGTN Africa (CCTV News) in
      Kenya, Africa Correspondent at TRTWORLD in Turkey, the Nigeria reporter of
      the Associated Press (AP), and the Nigeria Producer for the American
      network, NBC NEWS.
    </Paragraph>
    <br />
    <Paragraph>
      In recent years, he has covered elections across several countries, and
      reported political, economic and development news. He has also mentored
      journalists and organises media trainings for media executives and
      editors.
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
    <HeaderCaption
      title="Key achievement and recognition"
      subTitle="
        Recognition for commitment to truth and storytelling, highlighting
        exceptional reporting in the field of Journalism."
    />

    <div
      class="grid lg:grid-cols-3 grid-rows-3 lg:grid-rows-1 bg-primary-300 px-4 sm:px-20 py-10 lg:px-40 lg:py-10 gap-10"
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
    <HeaderCaption
      title="Media Appearance"
      subTitle="
        Words from client’s who have experienced the value of my Journalism
        skills, work ethic and collaborative spirit"
    />

    <div
      class="bg-primary-500 px-5 py-10 lg:px-40 lg:py-10 bg-[url(/pattern.svg)]"
    >
      <div
        class="bg-white grid lg:grid-cols-4 grid-rows-3 lg:grid-rows-1 gap-5 p-4 sm:p-10"
      >
        <div v-for="{ src, description } of media" class="border p-4">
          <div>
            <img :src="src" alt="CCN" class="h-20 w-full" />
          </div>
          <br />
          <Paragraph>
            {{ description }}
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
    <div>
      <LearnMore
        title="Start the conversation that will transform your Story, Brand and Events"
        :linkProps="{ name: 'LEARN MORE', href: '/learn-more' }"
      />
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
import Testimonial from "../components/Testimonial.vue";
import HeaderCaption from "../components/HeaderCaption.vue";
import LearnMore from "../components/LearnMore.vue";

const media = [
  {
    description:
      "Fidelis expertly harnesses the power of digital platforms to craft compelling naratives and drive engagements that resonates with diverse audiences.",
    src: "/image.png",
  },
  {
    description:
      "Highly acclaimed Aljazeera Reporter, acknowledged for delivering balanced and unwavering integrity of Global events.",
    src: "/image2.png",
  },
  {
    description:
      "With impeccable judgements, strategic acumen, Fidelis delivers successful press campaigns that shapes public discourse and foster lasting impressions",
    src: "/image3.png",
  },
  {
    description:
      "Fidelis is a highly respected and accomplished senior producer, praised for exceptional leadership, creative vision and an unwavering commitment to excellence",
    src: "/image4.png",
  },
];
</script>
