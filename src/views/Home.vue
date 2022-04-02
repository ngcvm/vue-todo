<script setup lang="ts">
interface Props {
  title?: string;
}

// reactive destructure for defineProps()
// default value is compiled to equivalent runtime option
const props = defineProps<Props>();
</script>
<template>
  <main>
    <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <!-- Replace with your content -->
      <div class="px-4 py-6 sm:px-0">
        {{ props?.title || "Default title" }}
      </div>
      <!-- /End replace -->
    </div>
  </main>
</template>
