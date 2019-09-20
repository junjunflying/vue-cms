<template>
    <div>
        <mt-swipe :auto="time" >
            <!-- 一定要注意 循环那个组件 怎么设置key 必须为唯一的值 作用 后边加深理解 -->
            <mt-swipe-item v-for="item in imglist" :key="item.id">
                <img :src="item.img" alt="">
            </mt-swipe-item>
        </mt-swipe>


        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../../assets/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../../assets/menu2.png" alt="">
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../../assets/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../../assets/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../../assets/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../../assets/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		            
		        </ul> 




        <!-- <p>进行ajax插值{{ msg.name }}</p> -->
    </div>
</template>
<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            
            msg:null, //测试axios
            imglist:[],//轮播图的图片数组
            time:1000 //控制轮播图时间的 auto数据绑定
        }
    },
    created(){
        // this.getmsg()
        this.getlunbo();
    },
    methods:{
        // getmsg(){
        //     this.axios.get('https://result.eolinker.com/vpAJJZ40da5481d4a0387ca37facecc57e18815dc256047?uri=homepge/list').then(response=>{
        //         this.msg=response.data;
        //     })
        //}
        getlunbo(){
            this.axios.get('http://www.liulongbin.top:3005/api/getlunbo').then(response=>{
                //这个回调 是成功的回调 也就是返回了数据 但是 返回的status是不是0还不确定  为什么要这样设计呢？
                if(response.data.status === 0){
                    Toast("成功")
                    this.imglist = response.data.message;
                }else{
                    Toast("请求成功 但是statue不成功")
                }
                
            },response=>{
                //这个回调 是失败的回调 也就是说 没有返回数据
                Toast("失败")
            })
        }
    }
}
</script>
<style lang="scss" scoped>
.mint-swipe {
    height: 200px;
    // 首先 添加一个高度 以为原来的高度为0  然后 整体的轮播图容器为 mint-swipe  三张图片的容器为 mint-swipe-items-wrap 每张图片的容器为 mint-swipe-item   三个小圆点的容器为 mint-swipt-indicators
    .mint-swipe-item{
        //交集选择器 scss语法 用 & 不写的话 默认为后代选择器
        &:nth-child(1){
        background-color: red;    
        }
        &:nth-child(2){
        background-color: yellow;
        }
        &:nth-child(3){
        background-color: blue;
        }

        img {
            width:375px;
            height: 200px;
        }
    }
  
}

// 直接去浏览器中复制 这个类 在scoped中写的类 优先级高一点 会覆盖之前的

//这是ul的类 选中ul
.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border:0;
    img{
        //设计稿是120的 但是一般移动端都是一半的大小 后边还要理解视窗
        width:60px;
        height: 60px;
    }
}

//这是li的类 
.mui-grid-view.mui-grid-9 .mui-media{
    border:0;
}

//这是文字的类
.mui-media-body{
    font-size: 13px;
}
   
</style>