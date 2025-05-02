<template>
  <Navigationbar />
  <div class="overflow-hidden">
    <section class="px-5 pt-40 pb-2 lg:pt-40 lg:px-40">
      <HeaderCaption
        title="Blogs and Media"
        subTitle="Where Journalism meets perspective: My insight, analysis and commentary on stories that shapes our world"
      />
    </section>

    <section :class="cn('px-5 py-5 lg:py-10 lg:px-40 lg:flex justify-between')">
      <article class="grid lg:grid-cols-2 gap-14">
        <ArticlePost
          src="https://www.aljazeera.com/wp-content/uploads/2020/10/2020-10-23T101603Z_638432546_RC29OJ9R5MMB_RTRMADP_3_NIGERIA-PROTESTS.jpg?resize=770%2C513&quality=80"
          date="25 Oct 2020"
          title="Nigeria seeks to halt looting amid fury over ‘food warehouses’"
          href="https://www.aljazeera.com/news/2020/10/25/nigeria-cracks-down-on-rising-mob-looting-on-food-warehouses"
        />

        <ArticlePost
          src="https://www.aljazeera.com/wp-content/uploads/2020/10/RTX847M0-1.jpg?resize=770%2C513&quality=80"
          date="24 Oct 2020"
          title="SARS protests: Tense calm in Nigeria after days of unrest"
          href="https://www.aljazeera.com/news/2020/10/24/calm-returns-to-nigeria-cities-after-unrest"
        />

        <ArticlePost
          src="https://www.aljazeera.com/wp-content/uploads/2020/10/AP_20294514192038.jpg?resize=770%2C513&quality=80"
          date="24 Oct 2020"
          title="Waving flags, they sang Nigeria’s anthem. Then they were shot at"
          href="https://www.aljazeera.com/news/2020/10/21/nigeria-angry-crowds-defy-curfew-as-they-protest-police-violence"
        />

        <ArticlePost
          src="https://www.aljazeera.com/wp-content/uploads/2020/10/000_8RP9DY.jpg?resize=770%2C513&quality=80"
          date="17 Oct 2020"
          title="Guineans set to vote in tense presidential election"
          href="https://www.aljazeera.com/news/2020/10/17/guinea-polls"
        />
      </article>
    </section>

    <section
      :class="
        cn('px-5 py-5 lg:py-10 lg:px-40 lg:flex flex-col justify-between')
      "
    >
      <Heading_2 content="Latest post" class="text-left" />

      <div>
        <Post
          src="https://www.aljazeera.com/wp-content/uploads/2020/10/2020-10-11T174141Z_369265755_RC2CGJ9NQ1W1_RTRMADP_3_NIGERIA-PROTESTS.jpg?resize=770%2C513&quality=80"
          date="11 Oct 2020"
          title="‘We need justice’: Nigerians to keep up #EndSARS pressure"
          href="https://www.aljazeera.com/news/2020/10/11/mixed-reactions-trail-dissolution-of-nigeria-police-unit"
        />
        <hr class="my-4" />

        <Post
          src="https://www.aljazeera.com/wp-content/uploads/2020/10/000_8RR6WH.jpg?resize=770%2C513&quality=80"
          date="10 Oct 2020"
          title="‘Enough is enough’: Nigerians demand SARS police unit scrapped"
          href="https://www.aljazeera.com/news/2020/10/10/nigerians-continue-protest-against-police-brutality"
        />
        <hr class="my-4" />

        <Post
          src="https://www.aljazeera.com/wp-content/uploads/2020/08/20bf7bbee2024fdbbb238323e4e3ba33_18.jpeg?resize=730%2C410&quality=80"
          date="17 Aug 2020"
          title="Regional leaders meet as Mozambique security crisis worsens"
          href="https://www.aljazeera.com/news/2020/8/17/regional-leaders-meet-as-mozambique-security-crisis-worsens"
        />
        <hr class="my-4" />

        <Post
          src="https://www.aljazeera.com/wp-content/uploads/2020/08/f5beaf4c41b94895b6e08bc6724cc6ab_18.jpeg?resize=770%2C513&quality=80"
          date="8 Aug 2020"
          title="Zimbabwe activists decry ‘unprecedented clampdown’ after arrests"
          href="https://www.aljazeera.com/news/2020/8/8/zimbabwe-activists-decry-unprecedented-clampdown-after-arrests"
        />
        <hr class="my-4" />

        <Post
          src="https://www.aljazeera.com/wp-content/uploads/2020/07/945c3e7124264df589029eaf2ee30870_18.jpeg?resize=770%2C513&quality=80"
          date="28 Jul 2020"
          title="Election race heats up as Tundu Lissu returns to Tanzania"
          href="https://www.aljazeera.com/news/2020/7/28/election-race-heats-up-as-tundu-lissu-returns-to-tanzania"
        />
        <hr class="my-4" />
      </div>
      <LinkButton
        href="https://www.aljazeera.com/author/fidelis_mbah_150401165945005"
        target="_blank"
        >READ MORE ARTICLES</LinkButton
      >
    </section>
    <LearnMore
      title="Collaborate with Brands and Agenciesto create impactful results"
      :linkProps="{ name: 'LEARN MORE', href: '/contact-me' }"
    />

    <!-- Foot component -->
    <Footer />
  </div>
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
import Post from "../components/basket/Post.vue";
import LinkButton from "../components/LinkButton.vue";
</script>
