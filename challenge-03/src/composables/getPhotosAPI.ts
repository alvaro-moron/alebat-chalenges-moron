import type { Photo } from "../interfaces/photos";
const fetchPhotos = async (url: string): Promise<Photo[]> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: Photo[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

export default fetchPhotos;
