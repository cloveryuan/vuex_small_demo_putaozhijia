<template>
  <div id="index">
    <header class="top_tips">
      <span class="num_tip">{{level}}</span>
    </header>
    <div>
      <div class="home_logo"></div>
      <router-link to="item" class="start button_style"></router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState({
    level: state => state.level //第几周
  })
};
</script>

<style  lang="less">
body {
  background: url("../../images/1-1.jpg");
  background-size: 100% 100%;
}
#index {
  .top_tips {
    position: absolute;
    top: -1.3rem;
    right: 1.6rem;
    height: 7.35rem;
    width: 3.25rem;
    background: url("../../images/WechatIMG2.png") no-repeat;
    background-size: 100% 100%;
    text-align: center;
    z-index: 10;
    .num_tip {
      font-size: 0.6em;
      color: #a57c50;
      font-family: "黑体";
      position: absolute;
      bottom: 1.1rem;
      right: 0.6rem;
      font-weight: 600;
    }
  }
  .home_logo {
    width: 80%;
    height: 11.625rem;
    position: absolute;
    top: 4rem;
    left: 1rem;
    background: url("../../images/1-2.png") no-repeat;
    background-size: 100% 100%;
  }
  .start {
    background: url("../../images/1-4.png") no-repeat;
    background-size: 100% 100%;
  }
}
</style>
