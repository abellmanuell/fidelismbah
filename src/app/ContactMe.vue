<template>
  <Navigationbar />
  <section :class="cn('px-5 pt-24 pb-2 lg:pt-30 lg:px-20 ')">
    <section :class="cn('py-5 lg:py-10 lg:px-20 lg:flex justify-between')">
      <div class="grid lg:grid-cols-2">
        <div class="bg-primary-500/15 p-10 rounded-md">
          <div>
            <Heading_3
              content="Contact Me"
              class-name="text-left text-sm text-white inline-block bg-[#3b4b5d] p-2"
            />
          </div>

          <Heading_3
            content="Let’s Connect and Make History together"
            class-name="text-left"
          />
          <Paragraph
            >Whether you’re looking to book Fidelis for a speaking engagement,
            schedule a consultation, or inquire about media training, we’re
            ready to assist you. Share your vision, and let’s make it a reality
            together.
          </Paragraph>

          <div class="my-4">
            <input
              type="text"
              placeholder="Name"
              class="w-full border rounded p-2 border-primary-200 outline-none"
            />
          </div>

          <div class="flex space-x-2 flex-col md:flex-row">
            <div class="md:my-4 w-full">
              <input
                type="email"
                placeholder="Email"
                class="w-full border rounded p-2 border-primary-200 outline-none"
              />
            </div>

            <div class="my-4 w-full">
              <input
                type="tel"
                placeholder="Phone Number"
                class="w-full border rounded p-2 border-primary-200 outline-none"
              />
            </div>
          </div>

          <textarea
            placeholder="Leave a message"
            class="w-full border border-primary-200 p-2 rounded"
          ></textarea>

          <div class="my-4 w-full">
            <input
              type="submit"
              class="w-full rounded-full font-bold text-white cursor-pointer border border-primary-500 hover:bg-white hover:text-primary-500 p-2 bg-primary-500 outline-none"
            />
          </div>
        </div>

        <div class="flex flex-col justify-center items-center">
          <div>
            <img :src="profilephoto" alt="Contact Me" class="hidden lg:block" />
          </div>

          <ul class="flex space-x-4">
            <li v-for="social of socialnetworks">
              <a :href="social.href">
                <v-icon :name="social.icon" scale="1" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </section>

  <section>
    <LearnMore
      title="Start the conversation that will transform your Story, Brand and Events"
      :linkProps="{ name: 'LEARN MORE', href: '/learn-more' }"
    />
  </section>

  <Footer />
</template>

<script setup>
import Heading_3 from "../components/basket/Heading_3.vue";
import Navigationbar from "../components/basket/Navigationbar.vue";
import Paragraph from "../components/basket/Paragraph.vue";
import { cn } from "../utils/cn";
import Footer from "../components/basket/Footer.vue";
import LearnMore from "../components/LearnMore.vue";
import profilephoto from "../assets/profilephoto.png";

const socialnetworks = [
  { icon: "bi-twitter", href: "https://twitter.com/FidelisMbah" },
  {
    icon: "pr-linkedin",
    href: "https://www.linkedin.com/in/fidelis-mbah-0a219913/",
  },
  { icon: "co-facebook", href: "#" },
  {
    icon: "bi-youtube",
    href: "https://www.youtube.com/channel/UCup-hGpD17dxFfxhvOqDsMA/featured?view_as=subscriber",
  },
  {
    icon: "bi-instagram",
    href: "https://www.instagram.com/fidelismbah/?hl=en",
  },
];
</script>
