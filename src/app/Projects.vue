<template>
  <Navigationbar />
  <section class="px-5 pt-40 pb-0 lg:pt-40 lg:px-40">
    <HeaderCaption
      title="Projects and appearances"
      subTitle="Defining moments and transformative projects that inspire change"
    />
  </section>

  <div class="mb-5 md:mb-10">
    <img :src="project_image" alt="Project Image" class="w-full" />
  </div>

  <section
    class="px-5 sm:pt-5 py-20 lg:pt-20 lg:pb-40 lg:px-20 lg:grid lg:grid-cols-2 gap-2"
  >
    <div class="grid lg:grid-cols-2 items-center gap-10 py-2 rounded-md">
      <div>
        <!-- <img
          src="https://www.aljazeera.com/wp-content/uploads/2024/02/2022-12-12T113008Z_379931144_RC2A6X9A2MH5_RTRMADP_3_NIGERIA-MILITARY-CHILDREN-1708513687.jpg?resize=770%2C513&quality=80"
          alt="Peter Obi in conversation"
          class="rounded-md"
        /> -->
        <iframe
          src="https://www.youtube.com/embed/xtzJJjR13Jc?si=YoM4TVicIQkrvnQ2"
          class="h-[200px] w-full lg:w-auto rounded-md"
        >
        </iframe>
      </div>
      <div>
        <!-- <span class="bg-primary-200 px-1">NEWS</span> -->
        <Heading_2
          class-name="text-left text-xl mb-4"
          content="Kenya Elections: Fake Social Media Reports Target Voters"
        />
        <Paragraph class="text-sm">
          Social media has played a major role in the lead up to Kenya
          elections...
        </Paragraph>
        <a
          target="_blank"
          href="https://www.youtube.com/embed/xtzJJjR13Jc?si=YoM4TVicIQkrvnQ2"
          class="text-sm mt-4 py-3 px-6 border rounded-full font-bold text-primary-500 bg-white hover:bg-primary-500 hover:text-white transition-all inline-block"
        >
          <span> WATCH VIDEO </span>
          <v-icon name="pr-arrow-up-right" scale="1" />
        </a>
      </div>
    </div>

    <div
      class="grid lg:grid-cols-2 items-center justify-center gap-10 py-2 rounded-md"
    >
      <div>
        <!-- <img
          src="https://www.aljazeera.com/wp-content/uploads/2020/12/2016-06-18T120000Z_630071213_D1AETKPXWZAA_RTRMADP_3_NIGERIA-SECURITY-NIGER.jpg?resize=770%2C513&quality=80"
          alt="Peter Obi in conversation"
          class="rounded-md"
        /> -->
        <iframe
          src="https://www.youtube.com/embed/Ket0RrwlU-g?si=V-yxo4QPrhl_Vxg0"
          class="h-[200px] rounded-md w-full lg:w-auto"
        >
        </iframe>
      </div>

      <div>
        <!-- <span class="bg-primary-200 px-1">NEWS</span> -->
        <Heading_2
          class-name="text-left text-xl mb-4"
          content="Fears of Political Violence Haunt Kenyan Citizens"
        />
        <Paragraph class="text-sm">
          Kenyans go to the polls on Tuesday to elect a president and
          parliament...
        </Paragraph>

        <a
          target="_blank"
          href="https://www.youtube.com/embed/Ket0RrwlU-g?si=V-yxo4QPrhl_Vxg0"
          class="text-sm mt-4 py-3 px-6 border rounded-full font-bold text-primary-500 bg-white hover:bg-primary-500 hover:text-white transition-all inline-block"
        >
          <span> WATCH VIDEO </span>
          <v-icon name="pr-arrow-up-right" scale="1" />
        </a>
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

      <Thumbnail
        title="UN to Close Five Peacekeeping Bases in D.R Congo"
        description="Nigeria's government has labelled criminal gangs as “terrorist” organisations. The gangs are blamed for mass kidnappings. Earlier this week, soldiers rescued 97 hostages, who were abducted more than two months ago. The classification will lead to harsher penalties. Al Jazeera's Fidelis Mbah reports from Abuja, Nigeria."
        src="https://www.youtube.com/embed/b-l39-21r-Q?si=xftZwlP6CXjBR2fY"
        date="31 Jul 2017"
      />

      <Thumbnail
        title="Growing Biker Culture Draws South African Women"
        description="Nigeria's government has labelled criminal gangs as “terrorist” organisations. The gangs are blamed for mass kidnappings. Earlier this week, soldiers rescued 97 hostages, who were abducted more than two months ago. The classification will lead to harsher penalties. Al Jazeera's Fidelis Mbah reports from Abuja, Nigeria."
        src="https://www.youtube.com/embed/MajeaW1ar1o?si=A8jJUAL0IZVOhyxW"
        date="29 Jul 2017"
      />

      <Thumbnail
        title="Liberia Marks 170 Years of Independence"
        description="Nigeria's government has labelled criminal gangs as “terrorist” organisations. The gangs are blamed for mass kidnappings. Earlier this week, soldiers rescued 97 hostages, who were abducted more than two months ago. The classification will lead to harsher penalties. Al Jazeera's Fidelis Mbah reports from Abuja, Nigeria."
        src="https://www.youtube.com/embed/0GFAoast3Hw?si=EQUsakRkdfjvKTeo"
        date="Dec 9, 2022"
      />
    </div>

    <LinkButton
      href="https://www.youtube.com/channel/UCup-hGpD17dxFfxhvOqDsMA/featured?view_as=subscriber"
      >WATCH MORE VIDEOS</LinkButton
    >
  </section>

  <LearnMore
    title="Collaborate with Brands and Agencies to create impactful results"
    :linkProps="{ name: 'LEARN MORE', href: '/contact-me' }"
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
import HeaderCaption from "../components/HeaderCaption.vue";
import LinkButton from "../components/LinkButton.vue";
import Thumbnail from "../components/Thumbnail.vue";
import LearnMore from "../components/LearnMore.vue";
import { RouterLink } from "vue-router";
</script>
