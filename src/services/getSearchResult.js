import axios from 'axios';

export function getSearchResult(query) {
    return axios({
        method: 'get',
        baseURL: "http://localhost:3000",
        url: "/search/",
        params: {
            query: query,
        },
    })
}