const keyApi = '14213260-4ef8d8d928e06692d174812ba';

export const getPhotosByCity = ville => {
    return fetch(`https://pixabay.com/api/?key=${keyApi}&image_type=photo&orientation=horizontal&category=buildings&q=${ville}`)
        .then(function(response) {
            return response.json();
        })
};