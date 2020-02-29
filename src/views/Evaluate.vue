<template>
  <div id="evaluate" class="themeBgColor">
    <!-- <Card style="width:350px">
        <ul>       
            <a :href="item.url" target="_blank">{{ item.name }}</a>
            <span>
              <Icon type="ios-star" v-for="n in 4" :key="n"></Icon>
              <Icon type="ios-star" v-if="item.rate >= 9.5"></Icon>
              <Icon type="ios-star-half" v-else></Icon>
              {{ item.rate }}item
            </span>
        </ul>
    </Card>-->
    <div class="grades pageBgColor">
      <div class="left">
        <p>{{sellerData.score}}</p>
        <p>综合评分</p>
        <p>高于周边商家{{sellerData.rankRate}}</p>
      </div>
      <div class="right"></div>
    </div>

    <div class="tag pageBgColor">
      <Button type="info">
        全部
        <span></span>
      </Button>
      <Button type="success">
        满意
        <span></span>
      </Button>
      <Button type="warning">
        不满意
        <span></span>
      </Button>
    </div>

    <div class="textSee pageBgColor">
      <Icon type="md-checkmark-circle" />
      <span>只看有类容的评价</span>
    </div>

    <div class="userMsg pageBgColor">
      <div v-for="(v,i) in evaluateData" :key="i">
        <div class="item">
          <Avatar icon="ios-person" :src="v.avatar" />
          <div class="msgRight">
            <div class="first">
              <p class="black">{{v.username}}</p>
              <p class="grey">{{v.rateTime}}</p>
            </div>
            <p class="grey">{{v.deliveryTime}}分钟送达</p>
            <p class="black">{{v.text}}</p>
            <p class="grey">{{v.recommend}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/styles/less/evaluate.less";
import { getEvaluate } from "../api/apis";
import { getSeller } from "../api/apis";

export default {
  data() {
    return {
      evaluateData: {},
      sellerData: {}
    };
  },
  created() {
    getEvaluate().then(res => {
      console.log(res.data.data);
      this.evaluateData = res.data.data;
    });
    getSeller().then(res => {
      this.sellerData = res.data.data;
    });
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="less" scoped>
</style>