<template>
<div>
	<div class="welcome-slider" id="container">
		<div id="vue-slider-container" style="height: 800px">
			<v-slider :speed="1000" :arrow="true" :dot="true">
	            <slider-item>
	                <div class="slider-1">Slider1</div>
	            </slider-item>
	            <slider-item>
	                <div class="slider-2">Slider2</div>
	            </slider-item>
	            <slider-item>
	                <div class="slider-3">Slider3</div>
	            </slider-item>
	        </v-slider>	
		</div>
	</div>
</div>
</template>

<style type="text/css">
	.welcome-slider .slider-1{
	    display: none;
	    background: url(../assets/slider_1.jpg) no-repeat center center;
	    height: 100%;
	    text-indent: -9999px;
	}
	.welcome-slider .slider-2{
	    display: none;
	    background: url(../assets/slider_2.jpg) no-repeat center center;
	    height: 100%;
	    text-indent: -9999px;
	}
	.welcome-slider .slider-3{
	    display: none;
	    background: url(../assets/slider_3.jpg) no-repeat center center;
	    height: 100%;
	    text-indent: -9999px;
	}

	/*调整切换图片按钮的样式，此按钮内嵌于v-slider模块中*/
	.welcome-slider .arrow-container span{
	    width:0;
	    height:0;
	    outline: 0;
	    opacity: 0.2;
	}
	.welcome-slider .arrow-container .left-arrow {
	    left: 75px;
	}
	.welcome-slider .arrow-container .left-arrow span{
	    float: left;
	    border-top:26px solid transparent;
	    border-bottom:26px solid transparent;
	    border-right:26px solid #eee;
	}
	.welcome-slider .arrow-container .right-arrow {
	    right: 55px;
	}
	.welcome-slider .arrow-container .right-arrow span{
	    float: right;
	    border-top:26px solid transparent;
	    border-bottom:26px solid transparent;
	    border-left:26px solid #eee;
	}
</style>

<script type="text/javascript">
var VSlider = require('v-slider')

export default {
	components: {
		'v-slider': VSlider.SliderContainer,
		'slider-item': VSlider.SliderItem
	}
}
</script>