<template>
    <div class="app-container" style="background-color:#fff">
        <mt-header fixed title="第一个项目"></mt-header>
		<transition>
			<router-view></router-view>
		</transition>
        

        <!-- 测试自己vue文件的 全局注册组件名时候的 name属性 -->
        <!-- <my-login></my-login> -->

        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>

    
    </div>
</template>
<script>


</script>
<style lang="scss" scoped>
    .app-container {
        /* 外层容器 上部设置padding 因为header已经固定定位到了上边 高度是40 */
        padding-top:40px;
		//x方向上 不会出现滚动条 
		overflow-x: hidden;
    }
	
	// 设置一些动画 实现是个tabbar有效果 首先要知道 是为中间那部分 router-view 设置动画 上下是不动的
	//是不是这样理解：router-view中的组件 在进场的时候 预先显示出来 被安排到右边 100%的位置 正在显示的组件 在0位置 此时 页面就被撑大了 x方向产生了滚动条 我们用overflow-x取消这种滚动条 只显示中间视口内的部分 当离场时 将位置设为 -100% 这样就在左边离场 离场之后 vue才彻底不显示这个组件 离场过程中还是显示的  所以 v-enter 和 v-leave-to 这两个初始状态（透明度和位置）要分开写

	.v-enter{
		opacity: 0;
		transform:translateX(100%)
	}
	.v-leave-to{
		opacity: 0;
		transform:translateX(-100%);
		//不太懂 为什么在此加绝对定位 就不会飘起来了 而不是用 之前用过的 mode:out-in
		position:absolute;
	}
	.v-enter-active,
	.v-leave-active{
		transition: all 0.5s ease;
	}
	
</style>
