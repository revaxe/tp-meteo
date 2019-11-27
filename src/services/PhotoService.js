const keyApi = '14213260-4ef8d8d928e06692d174812ba';
const urlApi = 'https://pixabay.com';

// Doc API : https://pixabay.com/api/docs/

export const PhotoService = {
    getPhotosByCity: city => {
        return fetch(`${urlApi}/api/?key=${keyApi}&image_type=photo&orientation=horizontal&q=${city}+city`)
            .then(response => response.json())
            .then(data => data.hits)
    }
};