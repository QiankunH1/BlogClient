<template>
    <div>
        我是主页
        <el-button @click="btn">测试</el-button>
    </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {
    btn() {
      this.$axios.get("/user/test").then(res => {
        console.log(res);
      });
    },
    WebSocketTest() {
      if ("WebSocket" in window) {
        alert("您的浏览器支持 WebSocket!");

        // 打开一个 web socket
        var ws = new WebSocket("ws://localhost:3000");

        ws.onopen = function() {
          //状态为1证明握手成功，然后把client自定义的名字发送过去
          if (so.readyState == 1) {
            //握手成功后对服务器发送信息
            so.send("type=add&ming=" + n);
          }
        };
        //错误返回信息函数
        ws.onerror = function() {
          console.log("error");
        };
        //监听服务器端推送的消息
        ws.onmessage = function(msg) {
          console.log(msg);
        };

        //断开WebSocket连接
        ws.onclose = function() {
          ws = false;
        };
      } else {
        // 浏览器不支持 WebSocket
        alert("您的浏览器不支持 WebSocket!");
      }
    }
  },
  created() {
    // this.WebSocketTest();
  }
};
</script>

<style lang="scss" scoped>
</style>