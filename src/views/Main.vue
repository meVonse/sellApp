<template>
  <div id="main">
    <div class="top">
      <div class="shop-header" :style="{backgroundImage:'url('+data.avatar+')'}">
        <!-- 店铺信息 -->
        <div class="msg">
          <div class="shop-img">
            <Avatar shape="square" icon="ios-person" size="80" :src="data.avatar" />
          </div>
          <div class="text">
            <p>
              <img src="../assets/imgs/brand@2x.png" alt />
              &emsp;
              <span class="fff font17 bold">{{ data.name }}</span>
            </p>
            <p>
              <span class="fff font14">{{data.description}}</span>
            </p>
            <p>
              <img class="img15" src="../assets/imgs/decrease_1@2x.png" alt />
              &emsp;
              <span
                class="fff font12"
              >{{data.supports?data.supports[0].description:""}}</span>
            </p>
          </div>
        </div>
        <!-- /店铺信息 -->
        <!-- 告示 -->
        <div class="bulletin font12 fff">
          <img class="img15" src="../assets/imgs/bulletin@2x.png" alt />
          {{data.bulletin}}
        </div>
        <!-- /告示 -->
      </div>

      <!-- 导航 -->
      <div class="shop-router-bar">
        <router-link to="/goods" class="greyPlus font16">商品</router-link>
        <router-link to="/evaluate" class="greyPlus font16">评价</router-link>
        <router-link to="/merchant" class="greyPlus font16">商家</router-link>
      </div>
      <!-- /导航 -->
    </div>
    <!--  二级路由 -->
    <div class="second-router">
      <router-view></router-view>
    </div>
    <div class="shopcar-bar"></div>
  </div>
</template>

<script>
import "../assets/styles/less/main.less";
import { getSeller } from "../api/apis";
// import goods from "./Goods.vue";

export default {
  data() {
    return {
      data: {}
    };
  },
  created() {
    getSeller().then(res => {
      this.data = res.data.data;
    });
  }
};
</script>

<style lang="less" scoped>
</style>