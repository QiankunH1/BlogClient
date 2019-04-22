<template>
    <div class="login-wrap">
        <h3>
            <i>login</i>
        </h3>
        <el-form  label-width="50px"  labelPosition='left'>
            <el-form-item label="账号:">
                <el-input v-model="userdata.username"  placeholder="请输入您的账号"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
                <el-input v-model="userdata.password"  placeholder="请输入您的密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="toLogin"><i>登录</i></el-button>
            </el-form-item>
            <el-form-item>
                没有账号？<span @click="toregiter">去注册</span>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "",
  data() {
    return {
      userdata:{
          username:'',
          password:'',
      }
    };
  },
  methods: {
      toregiter(){
          this.$router.push('/register')
      },
      toLogin(){
          this.$axios.post("/user/login", this.userdata)
        // axios.post("http://localhost:3000/user/login", this.userdata)
        .then(res => {
            console.log(res)
          if (res.code == 200) {
            this.$message.success("登录成功了，快去玩耍吧");
            this.$store.commit('CHANGEUSERINFO',res.data)
            setTimeout(()=>{
                this.$router.push('/index')
            },1000)
          } else {
            this.$message({
              message: res.msg,
              type: "error"
            });
          }
        });
      }
  }
};
</script>

<style lang="scss" scoped>
.login-wrap{
    width: 420px;
    margin:  0 auto;
    margin-top: 100px;
    color: aliceblue;
    border-radius: 8px;
    background-color: rgb(146, 142, 163);
    padding: 40px 50px;
    h3{
        font-size: 28px;
        margin: 20px 0px;
    }
    .el-button{
        font-size: 16px;
        width: 100%;
        border: none;
    }
    .el-button:hover{
        background-color: rgb(55, 61, 70);
        color: #fff;
    }
     /deep/ .el-form-item__label{
        color: #fff;
    }
    .el-form-item span{
        color: rgb(35, 13, 236);
        cursor: pointer;
    }
}
</style>