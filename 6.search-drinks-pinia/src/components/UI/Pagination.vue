<script setup>
import { usePaginateStore } from "@/stores/paginate";
import { FwbPagination } from "flowbite-vue";

const paginate = usePaginateStore();
</script>
<template>
  <div class="flex justify-center">
      <fwb-pagination
        v-model="paginate.currentPage"
        :total-items="paginate.totalItems"
        :per-page="paginate.postsPerPage"
        large
      >
          <button
            @click="paginate.setPage(page)"
            class="flex items-center justify-center first:rounded-l-lg last:rounded-r-lg px-3 h-8 ml-0 leading-tight text-gray-500 bg-purple-200 border border-purple-300 hover:bg-purple-300 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            {{ page }}
          </button>
      </fwb-pagination>
  </div>
</template>
