<template>
  <div class="hello">
    <p class="hello-title">
      <i class="iconfont icon-home1"></i>&nbsp;&nbsp;/&nbsp;&nbsp;作者审核列表
    </p>
    <p class="hello-content">
      <Row type="flex">
        <Col span="6">待审笔名:<input type="text" placeholder="待审笔名"></Col>
        <Col span="6">笔名:<input type="text" placeholder="笔名"></Col>
        <Col span="6">真实姓名:<input type="text" placeholder="真实姓名"></Col>
        <Col span="6">手机号码:<input type="text" placeholder="手机号码"></Col>
      </Row>
      <Row type="flex">
          <Col span="6">作者类型:<input type="text" placeholder="作者类型"></Col>
      </Row>
      <Row type="flex">
        <Col span="6"></Col>
        <Col span="6"></Col>
        <Col span="6"></Col>
        <Col span="6"><Button type="primary">查询</Button><Button type="primary">重置</Button><a href="#">更多</a></Col>
      </Row>
    </p>
    <Lists></Lists>
  </div>
</template>

<script>
import Lists from './list/lists.vue'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Lists
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 98%;
  margin: 0 auto
}
.hello-title{
  background: #e9ecf2;
  height: 40px;
  line-height: 40px;
  color: #77777f;
  padding-left: 20px;
  border-radius: 5px
}
.hello-content{
  height: 160px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 5px;
}
.hello-content>div{
  margin-top: 13px;
  margin-left: 14px;
}
.hello-content input{
  height: 30px;
  width: 137px;
  margin-left: 10px;
  outline: none;
  border: 1px #ccc solid;
  border-radius: 5px;
  padding-left: 10px;
}
.hello-content button{
  width: 53px;
  height: 28px;
  margin-right: 3px;
}
.hello-content a{
  color: #346ea2;
  text-decoration:underline
}
</style>
