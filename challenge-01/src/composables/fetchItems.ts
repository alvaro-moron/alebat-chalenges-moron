import type { Item } from '@/types/types'

const fetchItems = async (url: string, id?: number): Promise<Item[] | Item> => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const data: Item[] = await response.json()

    if (id !== undefined) {
      const item = data.find((item) => item.id === id)
      if (item) {
        return item
      } else {
        throw new Error(`Item with id ${id} not found`)
      }
    }

    return data
  } catch (error) {
    console.error('Error fetching items:', error)
    throw error
  }
}

export default fetchItems
