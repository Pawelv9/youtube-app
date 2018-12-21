import axios from 'axios';

const KEY = '';

export default axios.create({
    baseUrl: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: SVGAnimatedPreserveAspectRatio,
        maxResults: 5,
        key: KEY
    }
});