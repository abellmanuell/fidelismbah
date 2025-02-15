<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import logo from "@/assets/fidelis.png";
import { cn } from "@/utils/cn";

let isOpenSidebar = ref(false);
const routes = [
  { name: "Home", to: "/" },
  { name: "About", to: "/about" },
  { name: "Services", to: "/services" },
  { name: "Project", to: "/project" },
  { name: "Blog", to: "/blog" },
];

function setIsOpenSideBar() {
  isOpenSidebar.value
    ? (isOpenSidebar.value = false)
    : (isOpenSidebar.value = true);
}

function setIsCloseSidebar() {
  isOpenSidebar.value && (isOpenSidebar.value = false);
}
</script>

<template>
  <section>
    <div>
      <!-- Button to trigger Menu bar -->
      <div
        :class="
          cn(
            'fixed z-50 w-full bg-white flex-rows-reverse justify-between px-4 py-5 transition-all lg:px-20 xl:px-40',
            !isOpenSidebar ? 'flex' : 'hidden'
          )
        "
      >
        <div>
          <img
            :src="logo"
            alt="Fidelis Logo"
            :class="cn('max-w-16', !isOpenSidebar ? 'visible' : 'invisible')"
          />
        </div>

        <!-- Desktop Mode -->
        <nav class="hidden lg:flex justify-center items-center">
          <ul class="mx-10 flex space-x-15 justify-center items-center">
            <li v-for="{ name, to, icon } in routes" class="leading-10">
              <RouterLink
                :to="to"
                activeClass="font-bold border-b"
                class="inline-block w-full space-x-2px-4 text-primary-500"
              >
                <!-- <v-icon :name="icon" scale="1" /> -->
                <span>
                  {{ name }}
                </span>
              </RouterLink>
            </li>
          </ul>
          <div>
            <RouterLink
              to="/learn-more"
              class="text-sm py-2 px-4 rounded-full font-medium inline-block text-white bg-primary-500 transition-all"
            >
              <span> LET'S CONNECT </span>
              <v-icon name="pr-arrow-up-right" scale="1" />
            </RouterLink>
          </div>
        </nav>

        <button
          :class="cn('transition-all lg:hidden', 'cursor-pointer')"
          @click="setIsOpenSideBar"
        >
          <v-icon name="gi-hamburger-menu" scale="1.5" />
        </button>
      </div>

      <!-- Mobile mode -->
      <div
        @click="setIsCloseSidebar"
        :class="
          cn(
            'fixed z-40 h-dvh w-full',
            isOpenSidebar ? 'bg-black/40' : '-left-[2000px]'
          )
        "
      >
        <nav
          :class="
            cn(
              'fixed z-30 h-dvh w-[300px] bg-primary-500 transition-all lg:hidden',
              !isOpenSidebar ? '-left-[500px]' : 'left-0'
            )
          "
        >
          <div class="h-[20%] flex items-center justify-center">
            <img :src="logo" alt="Fidelis Logo" />
          </div>
          <ul class="mx-10">
            <li v-for="{ name, to, icon } in routes" class="leading-10">
              <RouterLink
                @click="setIsOpenSideBar"
                :to="to"
                activeClass=" font-bold"
                class="inline-block w-full space-x-2 rounded-md text-white"
              >
                <!-- <v-icon :name="icon" scale="1" /> -->
                <span>
                  {{ name }}
                </span>
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>
