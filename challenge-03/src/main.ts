import { createApp } from "vue";
import "./style.css";
import App from "@/App.vue";
createApp(App).mount("#app");
// import fetchPhotos from "@/composables/getPhotosAPI";

// try {
//   const fetchedItems = await fetchPhotos("https://picsum.photos/v2/list");
//   console.log(fetchedItems);
// } catch (error) {
//   console.error("Failed to fetch items:", error);
// }
