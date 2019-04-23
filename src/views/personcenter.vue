<template>
    <div class="wrap">
        <el-row>
            <el-col :span="6">      
                    <ul>
                        <li v-for="(item,index) in tabs" :key="index" :class="{active:index == num}" @click="tab(index)">{{item}}</li>
                    </ul>
            </el-col>
             <el-col :span="16" class="message_wraper">
                    <component :is="componentId"></component>  
              </el-col>  
        </el-row>
    </div>
</template>

<script>
import info from "../components/info.vue";
import fans from "../components/fans.vue";
import follow from "../components/follow.vue";
import myarticle from "../components/myarticle.vue";
export default {
  name: "personcneter",
  components: {
    fans,
    follow,
    info,
    myarticle
  },
  data() {
    return {
      componentId: "info",
      tabs: ["我的信息", "我的粉丝", "我的关注", "我的博文"],
      arr: ["info", "fans", "follow", "myarticle"],
      num: 0
    };
  },
  methods: {
    tab(index) {
      console.log(index);
      this.num = index;
      this.componentId = this.arr[index];
    }
  },
  created() {}
};
</script>

<style lang="scss" scoped>
.wrap {
  width: 70%;
  margin: 0 auto;
  background-color: #777272;
  margin-top: 100px;
  border-radius: 10px;
  ul {
    padding: 100px 40px;
    li {
      height: 60px;
      line-height: 60px;
      margin-top: 20px;
      cursor: pointer;
      font-size: 18px;
    }
  }
  .active {
    background-color: rgb(158, 146, 146);
    border-radius: 10px;
    color: #fff;
  }
  .message_wraper {
    margin-left: 50px;
    margin-top: 50px;
    height: 430px;
    border: 1px dashed rgb(207, 207, 207);
    box-shadow: 2px 2px 2px #3a3a3a;
    border-radius: 10px;
  }
}
</style>