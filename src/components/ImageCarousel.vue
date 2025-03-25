<template>
  <Carousel :items-to-show="1.5" :wrap-around="true" :autoplay="3000">
    <Slide v-for="(item, index) in items" :key="index">
      <div class="carousel-item space-x-5">
        <img :src="item.image" alt="Carousel Image" class="image" />
        <div class="content">
          <h4 class="tag">{{ item.tag }}</h4>
          <h2 class="title">{{ item.title }}</h2>
          <p class="description">{{ item.description }}</p>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import "vue3-carousel/carousel.css"; // Import styles
import obi from "@/assets/obi.png";

export default defineComponent({
  components: { Carousel, Slide, Pagination, Navigation },
  data() {
    return {
      items: [
        {
          image: obi,
          tag: "INTERVIEW",
          title: "Establishing youth innovation foundations",
          description:
            "A deep dive into this captivating conversation with Fidelis Mbah.",
        },
        {
          image: obi,
          tag: "TECH",
          title: "What social media needs to advance a developing world",
          description:
            "Exploring the role of social media in global development.",
        },
        {
          image: obi,
          tag: "NEWS",
          title: "The impact of digital transformation in Africa",
          description: "How digital transformation is reshaping economies.",
        },
      ],
    };
  },
});
</script>

<style scoped>
.carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  /* box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); */
}

.image {
  width: 50%;
  border-radius: 10px;
}

.content {
  margin-top: 10px;
}

.tag {
  background: #5c5c5c;
  color: #fff;
  padding: 2px;
  font-size: 15px;
  /* border-radius: 5px; */
  display: inline-block;
}

.title {
  font-size: 18px;
  margin: 10px 0;
}

.description {
  font-size: 14px;
  color: #555;
}
</style>
