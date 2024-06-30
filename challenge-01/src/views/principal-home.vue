<script setup lang="ts">
import arrayItems from '@/components/arrayItems.vue'
import bannerTop from '@/components/bannerTop.vue'
import { ref, onMounted } from 'vue'
import type { Item } from '@/types/types'

const items = ref<Item[]>([])

const fetchItems = async (url: string): Promise<Item[]> => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data: Item[] = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching items:', error)
    throw error
  }
}

onMounted(async () => {
  try {
    const fetchedItems = await fetchItems('/data/items.json')
    items.value = fetchedItems
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
