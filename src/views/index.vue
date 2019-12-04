<template>
    <div>
        我是主页
       <div>
            <input type="file" @change="handleChange">
            <!-- <img :src="imgData" > -->
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  data() {
    return {};
  },
    methods:{
            // getToken(){   
            //   axios.get("http://upload.yaojunrong.com/getToken").then(res=>{
            // this.token=res.data.data
            // })
            // },
            handleChange(event){
                let file = event.target.files[0]
                console.log(file)
                let formData =new FormData()
                formData.append('file',file)
                formData.append('text','真棒')
                axios.post('http://localhost:3000/upload',formData,{
                    headers:{
                        'Content-Type':'multipart/form-data'
                    }
                }).then (res=>{
               
                    this.imgData=res.data.url
                }) 
            }
        },
         created(){
        },
};
</script>

<style lang="scss" scoped>
</style>