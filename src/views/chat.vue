<template>
    <div class="wrap">
        <p>文明交友</p>
        <div class="msg-list">
            <ul v-for="(item,index) in datas" :key='index'>
                <li>{{item}}</li>
            </ul>
        </div>  
        <input type="text" v-model="msg" @keyup.enter="send">
        <el-button @click="send">发送</el-button>
    </div>
</template>

<script>
import io from 'socket.io-client';
 var socket = require('socket.io-client')('http://localhost:3000');
    export default {
        data(){
            return{
                msg:'',
                datas:[]
            }
        },
        methods:{
            connection(){
                var _this =this
                    socket.on('connect', function(){
                        console.log('...')
                    });
                      socket.on('event', function(data){
                        _this.$store.commit('CHANGEMSG',data)
                       _this.datas.push(data)
                    if(_this.datas.length>5){
                        _this.datas=_this.datas.slice(-10)
                    }      
                });
                    socket.on('disconnect', function(){});
            },
            send(){
                 socket.emit("event", this.msg);
                 this.msg='';
            },
        },
        created(){
            this.connection();
        },
         beforeDestroy() {
             websocket.close();
        }
    }
</script>

<style lang="scss" scoped>
.wrap{
    background-color: #888;
    width: 900px;
    height: 600px;
    margin: 0 auto;
    margin-top: 50px;
    border-radius: 10px;
    p{
        height: 70px;
        line-height: 70px;
        color: #fff;
        font-size: 22px;
    }
    .msg-list{
        width: 500px;
        height: 400px;
        margin: 0px auto 50px;
        border-radius: 10px;
        background-color: rgb(157, 158, 158);
        li{
            height: 40px;
            line-height: 40px;
            color: rgb(245, 216, 179);
        }
    }
}
</style>