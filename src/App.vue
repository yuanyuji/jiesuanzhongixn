<template>
  <div id="app">
    <div class="layout">
      <Layout>
        <Header>
            <Menu mode="horizontal" theme="dark" active-name="1">
                <div class="layout-logo">
                  <img src="../static/img/logo.png" alt="">结算中心
                </div>
                <div class="layout-nav">
                    <MenuItem name="1">
                        <Icon type="ios-navigate"></Icon>
                        蝶恋花
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="ios-keypad"></Icon>
                        乌衣巷
                    </MenuItem>
                    <MenuItem name="3">
                        <Icon type="ios-analytics"></Icon>
                        花满楼
                    </MenuItem>
                    <MenuItem name="4">
                        <Icon type="ios-paper"></Icon>
                        破阵子
                    </MenuItem>
                </div>
            </Menu>
        </Header>
        <Layout>
            <Sider hide-trigger :style="{background: '#fff'}">
              <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                <Submenu name="1">
                  <template slot="title">
                      <Icon type="ios-navigate"></Icon>
                      忆江南
                  </template>
                  <MenuItem name="1-1">凤栖梧</MenuItem>
                  <MenuItem name="1-2">子夜歌</MenuItem>
                  <MenuItem name="1-3">苏幕遮</MenuItem>
                </Submenu>
                <Submenu name="2">
                  <template slot="title">
                      <Icon type="ios-keypad"></Icon>
                      卷珠帘
                  </template>
                  <MenuItem name="2-1">满庭芳</MenuItem>
                  <MenuItem name="2-2">满江红</MenuItem>
                </Submenu>
                <Submenu name="3">
                  <template slot="title">
                      <Icon type="ios-analytics"></Icon>
                      虞美人
                  </template>
                  <MenuItem name="3-1">青玉案</MenuItem>
                  <MenuItem name="3-2">声声慢</MenuItem>
                </Submenu>
              </Menu>
            </Sider>
            <Layout>
              <Content :style="{ minHeight: '280px', background: '#f5f7f9'}">
                <router-view/>
              </Content>
            </Layout>
        </Layout>
      </Layout>
  </div>
  
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style>

</style>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>