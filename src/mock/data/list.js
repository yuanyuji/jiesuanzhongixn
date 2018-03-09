import mock from 'mockjs'
const lists = []
for (let i = 0; i < 100; i++) {
  lists.push(mock.mock({
    "number|+1": `${i+1}`,
    "number1": `${(i+1)*100}`,
    "name1": `@cname`,
    "name2": `@cname`,
    "name3": `@cname`,
    "name4": `@ctitle`,    
    "qx": `@cword(3)`,
    "tel": /^1[385][1-9]\d{8}/,
    "time1": `@date("yyyy-MM-dd HH:mm:ss")`,
    "time2": `@date("yyyy-MM-dd HH:mm:ss")`,
    "zt1": `终审通过`,
    "type": `非签约`,
    "zb": /^[a-zA-Z]+$/,
    "zbxh": `${(i+1)*3}`,
    "zb": `原创小二`
  }))
}
export default lists