<template>
    <div class="head-wrap">
        <div class="head">
            <!-- <router-link >首页</router-link>
            <router-link >博文</router-link>
            <router-link >交流</router-link>
            <router-link >写博文</router-link> -->
            <span @click="toindex">首页</span>
            <span>博文</span>
            <span @click="toChat">交流</span>
            <span>写博文</span>
            <div class="login" v-if="$store.state.userinfo">
                <el-dropdown>
                    <span>
                        <img :src="$store.state.userinfo.avatar" alt="">
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item >{{$store.state.userinfo.username}}</el-dropdown-item>
                        <el-dropdown-item @click.native="toPersoncenter">个人中心</el-dropdown-item>
                        <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
            <div class="logout" v-else>
                <div class="none" @click="tologin">未登录</div>
            </div>
        </div>
       
    </div>
</template>

<script>
export default {
  data() {
    return {
      // userinfo: ""
    };
  },
  methods: {
    toindex() {
      this.$router.push("/index");
    },
    tologin() {
      this.$router.push("/login");
    },
    logout(){
        this.$axios.get('/user/logout').then(res=>{
            this.$message.info(res.msg)
            this.$store.commit('CHANGEUSERINFO',null)

        })
    },
    toPersoncenter(){
      this.$router.push('/personcenter')
    },
    toChat(){
      this.$router.push('/chat')
    }
  },
  created() {
    this.userinfo = this.$store.state.userinfo;
    // console.log(this.userinfo);
  }
};
</script>

<style lang="scss" scoped>
.head-wrap {
  background-color: antiquewhite;
}
.head {
  width: 1200px;
  margin: 0 auto;
  height: 70px;
  line-height: 70px;
  font-size: 20px;
  display: inline-block;
  span {
    display: inline-block;
    margin-right: 50px;
  }
}
.login {
  position: absolute;
  right: 40px;
  top: 0;
}
.login img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.logout{
  position: absolute;
  width: 90px;
  right: 40px;
  top: 0;
  .none{
    width: 45px;
    height: 45px;
    line-height: 45px;
    margin-top: 13px;
    font-size: 14px;
    background-color: #888;
    color: #fff;
    border-radius: 50%;
    cursor: pointer;
    }
}
</style>