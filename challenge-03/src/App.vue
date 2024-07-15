<script setup lang="ts">
// import "@/main.ts";
import fetchPhotos from "@/composables/getPhotosAPI";
import { ref } from "vue";
import type { Photo } from "./interfaces/photos";
// export default {
//   name: "App",
// };
const fetchedItems = await fetchPhotos("https://picsum.photos/v2/list");

const dataPhotos = ref<Photo[]>([]);
dataPhotos.value = fetchedItems;
console.log(dataPhotos.value);
</script>
<template>
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Carga progresiva</title>
  </head>
  <body>
    <div class="main-container" id="app">
      <Suspense>
        <template #default>
          <div v-if="dataPhotos" class="main-container__grid">
            <article v-for="{ id, author, url } in dataPhotos" :key="id">
              <p>{{ author }}</p>
            </article>
          </div>
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>
    </div>
    <!-- <script type="module" src="/src/main.ts"></script> -->
  </body>
</template>
