import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID obGK_uCd9A2grUexpVzb8W15pSX-GR90sX86LahxOHM'
    },
});

