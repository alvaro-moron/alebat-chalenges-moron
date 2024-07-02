<script setup lang="ts">
import arrayItems from '@/components/ArrayItems.vue'
import bannerTop from '@/components/BannerTop.vue'
import { ref, onMounted } from 'vue'
import type { Item } from '@/types/types'
import fetchItems from '@/composables/fetchItems'
import { URL } from '@/constants'

const items = ref<Item[]>([])

onMounted(async () => {
  try {
    const fetchedItems = await fetchItems(URL)
    if (Array.isArray(fetchedItems)) {
      items.value = fetchedItems
    }
  } catch (error) {
    console.error('Failed to fetch items:', error)
  }
})
</script>

<template>
  <section class="home">
    <h1>Página principal</h1>
    <arrayItems :items="items" />
    <bannerTop :width="1920" :height="600" />
  </section>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  margin: 4rem 10%;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
}
</style>
