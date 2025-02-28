<template>
  <Navigationbar />

  <Hero />

  <!-- About Section -->
  <AboutSummary />

  <!-- Services Section -->
  <ServiceSummary />

  <!-- Projects and appearance section -->
  <ProjectSummary />

  <Testimonial />

  <BlogSummary />

  <LearnMore
    title="Start the conversation that will transform your Story, Brand and Events"
    :linkProps="{ name: 'LEARN MORE', href: '/learn-more' }"
  />

  <!-- Foot component -->
  <Footer />
</template>

<script setup>
import Navigationbar from "@/components/basket/Navigationbar.vue";
import AboutSummary from "../components/AboutSummary.vue";
import ProjectSummary from "../components/ProjectSummary.vue";
import Testimonial from "../components/Testimonial.vue";
import BlogSummary from "../components/BlogSummary.vue";
import Footer from "../components/basket/Footer.vue";
import Hero from "../components/Hero.vue";
import LearnMore from "../components/LearnMore.vue";
import ServiceSummary from "../components/ServiceSummary.vue";
</script>
