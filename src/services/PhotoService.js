const keyApi = '14213260-4ef8d8d928e06692d174812ba';
const urlApi = 'https://pixabay.com';

export const PhotoService = {
    getPhotosByCity: ville => {
        return fetch(`${urlApi}/api/?key=${keyApi}&image_type=photo&orientation=horizontal&q=${ville}+city`)
            .then(response => response.json())
            .then(data => data.hits)
    }
};