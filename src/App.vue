<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <Popover class="relative bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </a>
        </div>

        <router-link
          to="/"
          class="flex justify-between text-base font-medium text-gray-500 hover:text-gray-900"
        >
          <HomeIcon class="h-6 w-6" aria-hidden="true" />
          Home
        </router-link>
        <router-link
          to="/import"
          class="flex text-base font-medium text-gray-500 hover:text-gray-900"
        >
          <RefreshIcon class="h-6 w-6" aria-hidden="true" />
          Import
        </router-link>
      </div>
    </div>
  </Popover>
  <section>
    <router-view/>
  </section>
</template>

<script lang="ts">
import {
  Popover,
} from "@headlessui/vue";
import { HomeIcon, RefreshIcon } from "@heroicons/vue/outline";

export default {
  components: {
    Popover,
    RefreshIcon,
    HomeIcon,
  },
  setup() {
    return {};
  },
};
</script>
