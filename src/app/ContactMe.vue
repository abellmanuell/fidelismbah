<template>
  <Navigationbar />
  <section :class="cn('px-5 pt-24 pb-2 lg:pt-30 lg:px-20 ')">
    <section :class="cn('py-5 lg:py-10 lg:px-20 lg:flex justify-between')">
      <div class="grid lg:grid-cols-2">
        <div class="bg-[#DCE3EA] p-10 rounded-md">
          <div>
            <Heading_3
              content="Contact Me"
              class-name="text-center text-sm text-white inline-block bg-[#3b4b5d] p-4 w-[129px] "
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

          <div class="mb-2 mt-4">
            <input
              type="text"
              placeholder="Name"
              class="w-full border rounded p-2 border-black outline-none"
            />
          </div>

          <div class="flex space-x-2 flex-col md:flex-row">
            <div class="md:my-4 w-full">
              <input
                type="email"
                placeholder="Email"
                class="w-full border rounded p-2 border-black outline-none"
              />
            </div>

            <div class="my-4 w-full">
              <input
                type="tel"
                placeholder="Phone Number"
                class="w-full border rounded p-2 border-black outline-none"
              />
            </div>
          </div>

          <textarea
            placeholder="Leave a message"
            class="h-52 w-full border border-black p-2 rounded resize-none bg-[#E4E4E4]"
          ></textarea>

          <div class="my-4 w-full">
            <input
              type="submit"
              class="w-full rounded-full font-bold text-white cursor-pointer border border-primary-500 hover:bg-[#88a4b9] hover:text-primary-500 p-2 bg-primary-500 outline-none"
            />
          </div>
        </div>

        <div class="flex flex-col justify-start items-center">
          <div class="mb-10">
            <img :src="profilephoto" alt="Contact Me" class="hidden lg:block" />
          </div>

          <ul class="flex space-x-4">
            <li v-for="social of socialnetworks">
              <RouterLink :to="social.href" target="_blank">
                <v-icon
                  v-if="social.name !== 'twitter'"
                  :name="social.icon"
                  scale="1.5"
                />
                <i
                  v-else
                  class="pi pi-twitter inline-block pt-1"
                  style="font-size: 1.4em"
                ></i>
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </section>

  <section
    class="bg-[#DCE3EA] h-screen flex items-center justify-center text-center p-2"
    v-motion-slide-visible-top
  >
    <div class="w-[500px] space-y-4" v-motion-slide-visible-bottom>
      <Heading_1
        content="Start the conversation that will transform your Story, Brand and Events"
        class="!text-2xl"
      />
    </div>
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
import { RouterLink } from "vue-router";
import Heading_1 from "../components/basket/Heading_1.vue";

const socialnetworks = [
  {
    icon: "bi-twitter",
    href: "https://twitter.com/FidelisMbah",
    name: "twitter",
  },
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
