
import axios from 'axios'

// const env = process.env.NODE_ENV
// let baseURL = env=='development'?'/api':'/'
// console.log('baseURL',baseURL)
let baseURL = 'http://localhost:3000'
console.log('baseURL',baseURL)
const instance = axios.create({
    baseURL,
    timeout:1500,
})
const xhr = {
    get(url,data,config){
        return new Promise ((resolve,reject)=>{
            instance.get(url,{params:data},config).then(res=>{
                resolve(res.data)
                console.log(url)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    fetch(url,data,config,methods){
        return new Promise((resolve,reject)=>{
            instance[methods](url,data,config).then(res=>{
                console.log(url)
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    },
    post(url,data,config){
        return this.fetch(url,data,config,'post')
    }

}


export default xhr