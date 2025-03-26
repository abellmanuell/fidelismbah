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
  </section>
  <LearnMore
    title="Collaborate with Brands and Agenciesto create impactful results"
    :linkProps="{ name: 'LEARN MORE', href: '/contact-me' }"
  />

  <!-- Foot component -->
  <Footer />
</template>

<script setup>
import Heading_2 from "../components/basket/Heading_2.vue";
import { cn } from "../utils/cn";
import Navigationbar from "../components/basket/Navigationbar.vue";
import Footer from "../components/basket/Footer.vue";
import obi from "@/assets/obi.png";
import HeaderCaption from "../components/HeaderCaption.vue";
import Thumbnail from "../components/Thumbnail.vue";
import LearnMore from "../components/LearnMore.vue";
import ArticlePost from "../components/basket/ArticlePost.vue";
</script>
