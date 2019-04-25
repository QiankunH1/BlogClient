<template>
    <div>
        我是聊天界面
        <input type="text" v-model="msg">
        <el-button @click="send">发送</el-button>
        <div>{{date}}</div>
    </div>
</template>

<script>
import io from 'socket.io-client';
 var client = require('socket.io-client')('http://localhost:3000');
    export default {
        data(){
            return{
                msg:'',
                date:'消息'
            }
        },
        methods:{
            connection(){
                    client.on('connect', function(){
                        console.log('...')
                    });
                      client.on('event', function(data){
                        console.log('msg',data)
                });
                    client.on('disconnect', function(){});
            },
            send(){
                 client.emit("event", this.msg);
                 this.msg='';
            }
        },
            //  watch: {
            //      date:function(val,oldVal){
            //          console.log('val',val)
            //      },
            // },
        created(){
            this.connection()
        },
         beforeDestroy() {
             websocket.close();
        }
    }
</script>

<style lang="scss" scoped>

</style>