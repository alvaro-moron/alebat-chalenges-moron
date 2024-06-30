<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import bannerTop from '@/components/bannerTop.vue'
import type { Item } from '@/types/types'

const route = useRoute()
let id: number
const idParam = Number(route.params.id)

if (!isNaN(idParam)) {
  id = idParam
} else {
  console.error('Invalid id:', route.params.id)
}

const itemDetails = ref<Item>()

const fetchItemDetails = async (id: number) => {
  try {
    const response = await fetch('/data/items.json')
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data: Item[] = await response.json()
    const item = data.find((item) => item.id === id)
    if (item) {
      return item
    } else {
      throw new Error(`Item with id ${id} not found`)
    }
  } catch (error) {
    console.error('Error fetching item details:', error)
    throw error
  }
}

onMounted(async () => {
  try {
    itemDetails.value = await fetchItemDetails(id)
  } catch (error) {
    console.error('Failed to fetch item details:', error)
  }
})
</script>

<template>
  <section class="item" v-if="itemDetails">
    <bannerTop :width="1920" :height="300" />
    <article class="item__content">
      <h2>{{ itemDetails.name }}</h2>
      <p>{{ itemDetails.longDescription }}</p>
    </article>
  </section>
</template>

<style scoped lang="scss">
.item {
  &__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem 25%;
  }
}
</style>
