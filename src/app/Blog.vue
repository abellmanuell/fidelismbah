<template>
  <Navigationbar />
  <section :class="cn('px-5 pt-24 pb-2 lg:pt-40 lg:px-40 ')">
    <HeaderCaption
      title="Blogs and Media"
      subTitle="Where Journalism meets perspective: My insight, analysis and commentary on stories that shapes our world"
    />
  </section>

  <section :class="cn('px-5 py-5 lg:py-10 lg:px-40 lg:flex justify-between')">
    <article class="grid lg:grid-cols-2 gap-x-14 gap-y-4">
      <ArticlePost
        :src="obi"
        date="November 23, 2024"
        title="My Vision for storytelling in Africa"
        href="#"
      />

      <ArticlePost
        :src="obi"
        date="November 23, 2024"
        title="My Vision for storytelling in Africa"
        href="#"
      />
    </article>
  </section>

  <section
    :class="cn('px-5 py-5 lg:py-10 lg:px-40 lg:flex flex-col justify-between')"
  >
    <Heading_2 content="Latest post" class="text-left" />

    <Thumbnail
      title="Croatian Primer Minister forecast growth for his country"
      description="Quisque sodales. lacus ac sit diam ipsum vitae quam libero,
            efficitur. Cras adipiscing lorem. eu cursus Nunc sit nulla, ac
            placerat"
      src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1"
      date="November 31, 2025"
    />
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
import ArticlePost from "../components/basket/ArticlePost.vue";
</script>
