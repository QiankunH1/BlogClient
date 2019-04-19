<template>
    <div class="login-wrap">
        <h3>
            <i>register</i>
        </h3>
        <el-form  label-width="50px"  labelPosition='left'>
             <el-form-item label="头像:">
                  <el-upload
                        class="avatar-uploader"
                        action="https://upload-z1.qiniup.com"
                        :data="obj"
                        :on-success="handleAvatarSuccess"
                    >
                        <img v-if="userdata.avatar" :src="userdata.avatar" class="avatar">
                        <i v-else class="el-icon-plus el-icon-plus"></i>
                    </el-upload>
            </el-form-item>
            <el-form-item label="账号:">
                <el-input v-model="userdata.username"  placeholder="请输入您的账号"></el-input>
            </el-form-item>
            <el-form-item label="密码:">
                <el-input v-model="userdata.password"  placeholder="请输入您的密码"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button><i>注册</i></el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "",
  data() {
    return {
      userdata:{
          avatar:'',
          username:'',
          password:''
      },
      obj:{
          token:''
      }
    };
  },
  methods: {
      handleAvatarSuccess(file) {
          this.userdata.avatar = file.url;
      },
      getToken(){
          axios.get("http://upload.yaojunrong.com/getToken").then(res => {
                   this.obj.token=res.data.data
                //    console.log( this.obj.token)
      });
      }
  },
  created() {
      this.getToken()
  },
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
 .el-icon-plus {
   border-radius: 6px;
    border: 1px dashed #e5e4e4;
    font-size: 28px;
    color: #e5e4e4;
    width: 78px;
    height: 78px;
    line-height: 78px;
    text-align: center;
    margin-right: 40px;
  }
  .avatar {
    width: 78px;
    height: 78px;
    display: block;
    margin-right: 40px;
  }
}
</style>