<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <!-- Component Start -->
  <div
    class="flex flex-col w-screen h-screen overflow-auto text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200"
  >
    <div
      class="flex items-center flex-shrink-0 w-full h-16 px-10 bg-white bg-opacity-75"
    >
      <svg
        class="w-8 h-8 text-indigo-600 stroke-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
      <input
        class="flex items-center h-10 px-4 ml-10 text-sm bg-gray-200 rounded-full focus:outline-none focus:ring"
        type="search"
        placeholder="Search for anything…"
      />
      <div class="ml-10">
        <router-link class="mx-2 text-sm font-semibold text-indigo-700" to="/"
          >Home</router-link
        >
        <router-link
          class="mx-2 text-sm font-semibold text-gray-600 hover:text-indigo-700"
          to="/restore"
          >Restore my board</router-link
        >
      </div>
    </div>
    <div>
      <router-view />
    </div>
  </div>
  <a
    class="fixed bottom-0 right-0 flex items-center justify-center h-8 pl-1 pr-2 mb-6 mr-4 text-blue-100 bg-blue-600 rounded-full shadow-lg hover:bg-blue-600"
    href="https://twitter.com/lofiui"
    target="_top"
  >
    <div
      class="flex items-center justify-center w-6 h-6 bg-blue-500 rounded-full"
    >
      <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
        <g>
          <path
            d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"
          ></path>
        </g>
      </svg>
    </div>
    <span class="ml-1 text-sm leading-none">@lofiui</span>
  </a>
</template>

<script lang="ts">
export default {
  components: {},
  setup() {
    return {};
  },
};
</script>
