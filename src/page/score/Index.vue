<template>
    <div id="score">
        <div class="your_scores_container">
           <header class="your_scores">
               <span class="score_num">{{store}}</span>
               <span class="fenshu">分！</span>
            </header>
             <div class="result_tip">{{scoreTips}}</div>
        </div>
        <div class="share_button" @click="showCover"></div>
        <div class="share_code">
             <header class="share_header">关注葡萄之家，获取答案。</header>
            <img src="../../images/4-4.png" class="code_img">
        </div>
       <div class="share_cover" v-show="showHide" @click="showCover">
            <img src="../../images/5-2.png" class="share_img">
        </div>
    </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      store: 0, //分数
      showHide: false, //是否显示提示
      scoreTips: "", //分数提示
      rightAnswer: [2, 7, 12, 13, 18], //正确答案
      scoreTipsArr: [
        "你说，是不是把知识都还给小学老师了？",
        "还不错，但还需要继续加油哦！",
        "不要嘚瑟还有进步的空间！",
        "智商离爆表只差一步了！",
        "你也太聪明啦，葡萄之家欢迎你！"
      ]
    };
  },
  created() {
    this.computedScore();
    this.getScoreTip();
  },
  computed: mapState({
    answerid: state => state.answerid
  }),

  methods: {
    //计算分数
    computedScore() {
      var yes = 0;
      this.answerid.forEach((item, index) => {
        if (item == this.rightAnswer[index]) {
          yes += 1;
        }
      });
      //   console.log(this.answerid.length);//=0,0不能为除数
      this.store =
        yes / (this.answerid.length ? this.answerid.length : 1) * 100;
    },

    //是否显示分享提示
    showCover() {
      this.showHide = !this.showHide;
    },

    //根据分数显示提示
    getScoreTip() {
      if (this.store <= 20) {
        this.scoreTips = this.scoreTipsArr[0];
        return;
      }
      if (this.store <= 40) {
        this.scoreTips = this.scoreTipsArr[1];
        return;
      }
      if (this.store <= 60) {
        this.scoreTips = this.scoreTipsArr[2];
        return;
      }
      if (this.store <= 80) {
        this.scoreTips = this.scoreTipsArr[3];
        return;
      }
      if (this.store <= 100) {
        this.scoreTips = this.scoreTipsArr[4];
      }
    }
  }
};
</script>

<style lang="less">
body {
  background: url("../../images/4-1.jpg");
  background-size: 100% 100%;
}
#score {
  width: 100%;
  text-align: center;
  .your_scores_container {
    width: 9.7rem;
    height: 9.1rem;
    background: url("../../images/4-2.png") no-repeat;
    background-size: 100% 100%;
    margin: 1.2rem auto 0.8rem;
    position: relative;
    .your_scores {
      position: absolute;
      top: 4.7rem;
      text-indent: 4rem;
      font-size: 1.4rem;
      font-weight: 900;
      font-family: "Microsoft YaHei";
      .score_num {
        color: #a51d31;
        font-family: Tahoma, Helvetical, Arial;
      }
      .fenshu {
        color: #a51d31;
      }
    }
    .result_tip {
      position: absolute;
      top: 7rem;
      width: 9rem;
      left: 0.6rem;
      color: #3e2415;
      font-size: 0.65rem;
      text-align: center;
    }
  }
  .share_button {
    background: url("../../images/4-3.png") no-repeat 0.3rem 0;
    background-size: 100% 100%;
    width: 6.025rem;
    height: 2.4rem;
    margin: 0 auto;
  }
  .share_code {
    .share_header {
      margin: 1.2rem 0 0.6rem;
      color: #664718;
      font-size: 0.475rem;
      font-family: "Microsoft YaHei";
      font-weight: 500;
    }
    .code_img {
      height: 5.3rem;
      width: 5.3rem;
    }
  }
  .share_cover {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.75);
    position: fixed;
    top: 0;
    left: 0;
    .share_img {
      height: 10.975rem;
      width: 11.95rem;
      position: fixed;
      top: 0.5rem;
      left: 50%;
      margin-left: -5.975rem;
    }
  }
}
</style>


