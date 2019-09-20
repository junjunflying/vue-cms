<template>
    <div>
        <p>我是login组件</p>
    </div>
</template>
<script>
export default {
    name:'my-login'

    //这里有一点对于 按需引入mint-ui组件的理解 其实mint-ui向外暴露了很多对象 按需引入后 注册为全局组件的时候 这些对象都有个name属性 其实就是引用这些组件的时候 所使用的标签名 其实 一vue文件是模板对象 一个login={template:"<h1>哈哈</h1>"} 也是一个模板对象 只不过vue是单独提出一个文件中 并且在template的时候 应用高亮 还能写上点样式 不用login中那样 直接在template中写一长串没有提示的字符串 还要在字符串中加上style属性来添加样式 vue文件的好处就是 将html和css分开 按照自己的提示写 然后合并在template的字符串中 然后通过js向外暴露这个对象

    //https://www.cnblogs.com/Sherlock09/p/11023593.html 关于 vue-loader的作用 还需要深入理解原理
}
</script>
<style lang="css" scoped>
    p {
        color:red;
    }
</style>

