import axios from 'axios';

const API_KEY = import.meta.env.VITE_PIXABAY_KEY;

// 📸 Fetch Photos from Pixabay
export async function fetchPhotos(query, page = 1, per_page = 20) {
    const res = await axios.get('https://pixabay.com/api/', {
        params: {
            key: API_KEY,
            q: query,
            page,
            per_page,
            image_type: 'photo'
        }
    });
    return res.data.hits;
}

// 📹 Fetch Videos from Pixabay
export async function fetchVideos(query, page = 1, per_page = 15) {
    const res = await axios.get('https://pixabay.com/api/videos/', {
        params: {
            key: API_KEY,
            q: query,
            page,
            per_page
        }
    });
    return res.data.hits;
}

// 🎞️ Fetch GIFs / Animations from Pixabay
export async function fetchGIF(query, page = 1, per_page = 15) {
    const res = await axios.get('https://pixabay.com/api/', {
        params: {
            key: API_KEY,
            q: query,
            page,
            per_page,
            image_type: 'all'
        }
    });
    return res.data.hits;
}