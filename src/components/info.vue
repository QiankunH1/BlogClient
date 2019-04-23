<template>
    <div class="info-wrap">
        <div>
            <p>我的头像:</p>
            <img :src="$store.state.userinfo.avatar" alt="">
        </div>
        <div>
             <p>我的昵称:</p>{{$store.state.userinfo.username}}
        </div>
        <el-button class="btn">修改信息</el-button>
    </div>
</template>

<script>
    export default {
        created(){
            console.log(this.$store.state.userinfo)
        }
    }
</script>

<style lang="scss" scoped>
.info-wrap{
    text-align: left;
    padding: 70px 50px;
      font-size: 20px;
        color: #fff;
    p{
        display: inline-block;
        margin:20px 30px;
    }
    img{
        width: 100px;
        height: 100px;
        border-radius: 50%;
    }
    .btn{
        position: absolute;
        right: 80px;
        top: 70px;
    }
}
</style>