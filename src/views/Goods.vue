<template>
  <div id="goods" class="themeBgColor">
    <!-- 左侧 -->
    <div class="left font14" id="left">
      <ul class="content">
        <div @click="clickLeftTitle(i)" v-for="(v,i) in data" :key="i"
        :class="{active:i==selectTitle}"
        >{{ v.name }}</div>
      </ul>
    </div>
    <!-- 右侧 -->
    <div class="right" id="right">
      <ul class="content">

        <div :id="i" v-for="(v,i) in data" :key="i">
          <!-- 商品分类title -->
          <div class="title greyPlus font14">{{ v.name }}</div>
          <!-- 商品信息 -->
          <div class="item black font16 pageBgColor" v-for="(val,key) in v.foods" :key="key">
            <!-- 商品类容 -->
            <div class="goodsContent">
              <div class="shop-img">
                <Avatar shape="square" icon="ios-person" size="70" :src="val.image" />
              </div>
              <div class="text">
                <p class="font15 black">{{val.name}}</p>
                <p class="font13 grey">{{val.description}}</p>
                <p class="font13 grey">月售{{val.sellCount}}份 &emsp;好评率{{val.rating}} %</p>
                <p class="font15 red bold">￥ {{val.price}}</p>
              </div>
            </div>
          </div>
          <!-- /商品信息 -->
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { getGoods } from "../api/apis";
import { getSeller } from "../api/apis";
import BScroll from "better-scroll";
import "../assets/styles/less/goods.less";

export default {
  data() {
    return {
      goodsid: null,
      data: {},
      selectTitle:0,
    };
  },
  created() {
    getSeller().then(res => {
      this.goodsid = res.data.data.id;
    });
    getGoods(this.goodsid).then(res => {
      this.data = res.data.data;
    });
  },
  mounted() {
    new BScroll(document.getElementById("left"),{
      click:true,/* 允许容器点击 */
    });
    /* 挂在到this  this指向组件本身 Goods */
    this.rightDiv = new BScroll(document.getElementById("right"));
  },
  methods:{
    clickLeftTitle(i){
      this.selectTitle  = i;
      this.rightDiv.scrollToElement(document.getElementById(i),600);
    }
  }
  // props:["goodsid"],
};
</script>

<style lang="less" scoped>
  .active{
    background: #fff !important;
  }
</style>