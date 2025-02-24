import { createApi } from 'unsplash-js';
import { useEffect } from 'react';


// Initialize Unsplash API
console.log("Unsplash API Key:", import.meta.env.VITE_UNSPLASH_KEY);

const unsplash = createApi({
    accessKey: import.meta.env.VITE_UNSPLASH_KEY 
});

// Function to fetch photos based on a query (art category)
const fetchPhotos = async (query, photoCount = 4) => {
    try {
        const result = await unsplash.search.getPhotos({
            query: query,
            page: 1,
            perPage: photoCount, // Fetch the number of photos based on photoCount
            orientation: 'portrait'
        });
        console.log(import.meta.env.VITE_UNSPLASH_KEY)
        return result.response.results; // Extract only the image array
    } catch (error) {
        console.error('Error fetching photos:', error);
        console.log(import.meta.env.VITE_UNSPLASH_KEY)
        return []; // Return empty array on error
    }
};

// Function to detect which page is being viewed
const getPageType = () => {
    const path = window.location.pathname;

    if (path.includes('/modern-art')) return { artType: 'Modern Art', containerId: 'modern-art-images', photoCount: 20 };
    if (path.includes('/classic')) return { artType: 'Classic Art', containerId: 'classic-art-images', photoCount: 20 };
    if (path.includes('/sculptures')) return { artType: 'Sculpture Art', containerId: 'sculpture-art-images', photoCount: 20 };
    if (path.includes('/cubism')) return { artType: 'Cubism', containerId: 'cubism-art-images', photoCount: 20 };
    if (path.includes('/abstract')) return { artType: 'Abstract Art', containerId: 'abstract-art-images', photoCount: 20 };

    // Default to homepage
    return { artType: null, containerId: null, photoCount: 4 };
};

// React Component to Display Photos
const DisplayPhotos = () => {
    useEffect(() => {
        const artTypes = [
            { name: 'Modern Art', id: 'modern-art-images', link: '/modern-art'},
            { name: 'Classic Art', id: 'classic-art-images', link: '/classic'},
            { name: 'Sculpture Art', id: 'sculpture-art-images', link: '/sculptures'},
            { name: 'Cubism', id: 'cubism-art-images', link: '/cubism'},
            { name: 'Abstract Art', id: 'abstract-art-images', link: '/abstract'}
        ];

        const { artType, containerId, photoCount } = getPageType();

        const displayPhotos = async () => {
            if (artType) {
                // Dedicated page (fetch 20 photos for a specific art category)
                try {
                    const photos = await fetchPhotos(artType, photoCount);
                    const imageContainer = document.getElementById(containerId);

                    if (imageContainer) {
                        imageContainer.innerHTML = ''; // Clear previous images
                        photos.forEach((photo) => {
                            const img = document.createElement('img');
                            img.src = photo.urls.small;
                            img.alt = `${artType} Image`;

                            imageContainer.appendChild(img);
                        });
                    }
                } catch (error) {
                    console.error('Error fetching photos:', error);
                }
            } else {
                // Homepage (fetch 4 photos for each category)
                try {
                    for (const art of artTypes) {
                        const photos = await fetchPhotos(art.name, 4);
                        const imageContainer = document.getElementById(art.id);

                        if (imageContainer) {
                            imageContainer.innerHTML = ''; // Clear previous images
                            photos.forEach((photo) => {
                                const img = document.createElement('img');
                                img.src = photo.urls.small;
                                img.alt = `${art.name} Image`;

                                // Add click event to redirect to the respective page
                                img.addEventListener('click', () => {
                                    window.location.href = art.link;
                                });

                                imageContainer.appendChild(img);
                            });
                        }
                    }
                } catch (error) {
                    console.error('Error fetching photos:', error);
                }
            }
        };

        displayPhotos();
    }, []); // Runs only once on mount

    return null; // No UI elements in this component, just logic
};

export default DisplayPhotos;
