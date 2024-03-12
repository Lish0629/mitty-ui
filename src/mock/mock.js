import Mock from 'mockjs';
//引用mockjs组件

Mock.mock('http://localhost:8080/user',{
    'name':'@name',
    'email':'@email',
    'age|1-10':5
    //随机生成姓名、邮箱和年龄
});

Mock.mock('http://localhost:8080/menu',{
    'id':'@increment',
    'name':'menu',
    'order|10-20':12

});
