<template>
  <Navigationbar />
  <section :class="cn('px-5 py-20 lg:pt-40 lg:px-40 ')">
    <HeaderCaption
      title="Projects and appearances"
      subTitle="Defining moments and transformative projects that inspire change"
    />
  </section>

  <div class="mb-10">
    <img :src="project_image" alt="Project Image" class="w-full" />
  </div>

  <section
    :class="cn('px-5 py-20 lg:pt-20 lg:pb-40 lg:px-20 lg:flex justify-between')"
  >
    <div
      class="grid lg:grid-cols-2 place-items-center gap-5 lg:space-y-4 lg:px-4 py-4 lg:py-0"
    >
      <div>
        <img :src="obi" alt="Peter Obi in conversation" />
      </div>
      <div>
        <span class="bg-primary-200 px-1">INTERVIEW</span>
        <Heading_2
          class-name="text-left"
          content="Establishing youth innovation foundations across states"
        />
        <Paragraph>
          a dive in to this captivating conversation as Fidelis Mbah interview’s
          Peter Obi, Labor party’s presidential candidate
        </Paragraph>
      </div>
    </div>

    <div
      class="grid lg:grid-cols-2 place-items-center gap-5 lg:space-y-4 lg:px-4 py-4 lg:py-0"
    >
      <div>
        <img :src="obi" alt="Peter Obi in conversation" />
      </div>
      <div>
        <span class="bg-primary-200 px-1">INTERVIEW</span>
        <Heading_2
          class-name="text-left"
          content="Establishing youth innovation foundations across states"
        />
        <Paragraph>
          a dive in to this captivating conversation as Fidelis Mbah interview’s
          Peter Obi, Labor party’s presidential candidate
        </Paragraph>
      </div>
    </div>
  </section>

  <section :class="cn('pb-32 px-4 lg:px-40')">
    <div class="my-5">
      <Thumbnail
        title="Eight soldiers killed in Mali attack, army says"
        description="At least eight soldiers have been killed in western Mali, in what the army describes as a targeted attack. This comes as talks aimed at ending the country's political crisis come to a close. The attack is seen as another setback to any return to civilian rule."
        src="https://www.youtube.com/embed/eKXN5SINu3s?si=vbBpNLln0z3BES3I"
        date="Dec 9, 2022"
      />
      <Thumbnail
        title="Nigeria labels bandit gangs ‘terrorists’"
        description="Nigeria's government has labelled criminal gangs as “terrorist” organisations. The gangs are blamed for mass kidnappings. Earlier this week, soldiers rescued 97 hostages, who were abducted more than two months ago. The classification will lead to harsher penalties. Al Jazeera's Fidelis Mbah reports from Abuja, Nigeria."
        src="https://www.youtube.com/embed/TTPY_TKGnvw?si=T6h-vaWXPCUsDluP"
        date="Dec 9, 2022"
      />
    </div>

    <LinkButton
      href="https://www.youtube.com/channel/UCup-hGpD17dxFfxhvOqDsMA/featured?view_as=subscriber"
      >WATCH MORE VIDEOS</LinkButton
    >
  </section>

  <LearnMore
    title="Collaborate with Brands and Agenciesto create impactful results"
    :linkProps="{ name: 'LEARN MORE', href: '/learn-more' }"
  />

  <!-- Foot component -->
  <Footer />
</template>

<script setup>
import Paragraph from "../components/basket/Paragraph.vue";
import Heading_2 from "../components/basket/Heading_2.vue";
import { cn } from "../utils/cn";
import Navigationbar from "../components/basket/Navigationbar.vue";
import Footer from "../components/basket/Footer.vue";
import project_image from "@/assets/project-image.png";
import obi from "@/assets/obi.png";
import HeaderCaption from "../components/HeaderCaption.vue";
import LinkButton from "../components/LinkButton.vue";
import Thumbnail from "../components/Thumbnail.vue";
import LearnMore from "../components/LearnMore.vue";
</script>
