<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import bannerTop from '@/components/BannerTop.vue'
import type { Item } from '@/types/types'
import fetchItems from '@/composables/fetchItems'
import { URL } from '@/constants'

const route = useRoute()
const id: number = Number(route.params.id)
const itemDetails = ref<Item>()

onMounted(async () => {
  try {
    const fetchedItem = await fetchItems(URL, id)
    if (!Array.isArray(fetchedItem)) {
      itemDetails.value = fetchedItem
    }
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
