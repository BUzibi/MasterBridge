import axios from 'axios';

const Http = axios.create({
    baseURL: 'http://127.0.0.1:3000',
    timeout: 60000,
})

Http.interceptors.request.use(
    request => {
        return request
    }, error => {
        return error
    })

Http.interceptors.response.use(
    response => {
        const {status, headers, data} = response || {};
        return data.data;
    },
    error => {
        // const { response } = error;
        return error;
    }
)

export default Http
