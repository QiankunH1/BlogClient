
import axios from 'axios'
import qs from 'qs'
const env = process.env.NODE_ENV
let baseURL = env=='development'?'/api':'/'
// console.log('baseURL',baseURL)
// let baseURL = 'http://localhost:3000'

// let baseURL = 'https://openapi.kujiale.com/'
// let baseURL = 'http://api.nsrjlb.com.cn'

const instance = axios.create({
    baseURL,
    timeout: 1500,
    withCredentials: true
})
const xhr = {
    get(url, data, config) {
        return new Promise((resolve, reject) => {
            config = {
                // ...config,
                headers: {
                    'name': 'hello2'
                },
            }
            instance.get(url, { params: data, ...config }).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    fetch(url, data, config, methods) {
        return new Promise((resolve, reject) => {
            config = {
                // ...config,
                headers: {
                    'name': 'hello2'
                },
            }
            instance[methods](url, data, config).then(res => {
                resolve(res.data)
            }).catch(err => {
                reject(err)
            })
        })
    },
    post(url, data, config) {
        return this.fetch(url, data, config, 'post')
    }

}
instance.interceptors.request.use(config => {
    
    if (config.method != 'get') {
        config.data = qs.stringify(config.data)
        // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
        // config.headers['Content-Type'] = 'multipart/form-data';
    }
    config.headers.common['name'] = 'hello3';
    config.withCredentials = true
    console.log(config)
    return config;
}, error => {
    return Promise.reject(error)
})

export default xhr

