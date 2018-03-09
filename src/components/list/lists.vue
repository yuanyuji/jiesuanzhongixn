<template>
  <div class="lists">
    <p class="lists-title">
      作者列表
    </p>
    <div class="lists-page">
        <span class="lists-total">总条数:100</span><span class="lists-nums">总页数:1/10</span><Page :total="100" :page-size="10" @on-change="handleCurrentChange"></Page>
        <Table border :columns="columns7" :data="$store.state.residentList"></Table>
    </div>
    <div>
      
    </div>
  </div>
</template>
<script>
export default {
  name: 'lists',
  data () {
    return {
      page:1,
      columns7: [
        {
          title: '作者ID',
          key: 'number'
        },
        {
          title: '用户ID',
          key: 'number1'
        },
        {
          title: '真实姓名',
          key: 'name1'
        },
        {
          title: '待审笔名',
          key: 'name2'
        },
        {
          title: '笔名',
          key: 'name3'
        },
        {
          title: '原笔名',
          key: 'name4'
        },
        {
          title: '写作倾向',
          key: 'qx'
        },
        {
          title: '手机号码',
          key: 'tel'
        },
        {
          title: '申请时间',
          key: 'time1'
        },
        {
          title: '审核时间',
          key: 'time2'
        },
        {
          title: '笔名状态',
          key: 'zt1'
        },
        {
          title: '资料状态',
          key: 'zt1'
        },
        {
          title: '类型',
          key: 'type'
        },
        {
          title: '组别',
          key: 'zb'
        },
        {
          title: '组别序号',
          key: 'zbxh'
        },
        {
          title: '责编',
          key: 'zb'
        },
        {
          title: '操作',
          key: 'action',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.show(params.index)
                  }
                }
              }, '预览'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.remove(params.index)
                  }
                }
              }, '停止抓取')
            ]);
          }
        }
      ]
    }
  },
  created () {
    this.$store.dispatch('update_list', 1);
  },
  methods: {
    handleCurrentChange (page) {
      this.$store.dispatch('update_list',page);
      this.page = page;
    }
  }
}
</script>
<style>
.lists{
  height: 700px;
  border: #ccc solid 1px;
  margin-top: 18px;
  background: #fff
}
.lists-title{
  background: #e9ecf2;
  height: 53px;
  line-height: 53px;
  color: #363636;
  padding-left: 20px;
  font-size: 14px;
}
.lists-page{
  margin: 0 15px
}
.lists-page .ivu-page{
  margin-top: 28px;
  float: left;
  margin-bottom: 17px
}
.lists-total{
  display: block;
  width: 97px;
  height: 30px;
  line-height: 30px;
  border: 1px #ccc solid;
  border-radius: 2px;
  margin-top: 28px;
  float: left;
  text-align: center
}
.lists-nums{
  display: block;
  width: 97px;
  height: 30px;
  line-height: 30px;  
  border-top: 1px #ccc solid;
  border-bottom: 1px #ccc solid;
  float: left; 
  margin-top: 28px; 
  text-align: center  
}
.ivu-table-wrapper{
  clear: both
}

</style>
