<template>
  <div id="item">
    <header class="top_tips">
      <span class="num_tip">题目{{itemNum}}</span>
    </header>
    <div>
      <div class="item_logo">
          <div class="item_list_container" v-if="itemDetail.length>0">
               <header class="item_title">{{itemDetail[itemNum-1].topic_name}}</header>
                <ul>
                    <li 
                    v-for="(item,index) in itemDetail[itemNum-1].topic_answer"  
                    :key="index" 
                    class="item_list"
                    @click="choosed(index,item.topic_answer_id)"
                    >
                        <span class="option_style" v-bind:class="{'has_choosed':choosedNum==index}">
                            {{chooseType[index]}}
                        </span>
                        <span class="option_detail">{{item.answer_name}}</span>
                    </li>
                </ul>
          </div>
      </div>
      <span class="next button_style" v-if="itemNum<itemDetail.length" @click="nextItem"></span>
    <span class="submit button_style" v-if="itemNum>=itemDetail.length" @click="submitAnswer"></span>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      chooseType: ["A", "B", "C", "D"],
      itemId: null, //题目ID
      choosedNum: null, //选中答案索引
      choosedId: null //选中答案id
    };
  },

  //   初始化数据
  created() {
    this.initializeData();
    this.$store.commit("REMBER_TIME");
  },

  computed: mapState({
    itemNum: state => state.itemNum, //第几题
    itemDetail: state => state.itemDetail, //题目详情
    timer: state => state.timer //计时器
  }),

  methods: {
    ...mapActions(["addNum", "initializeData"]),
    //选中的答案索引及其对应答案的id号
    choosed(index, id) {
      this.choosedNum = index;
      this.choosedId = id;
    },
    // 下一题
    nextItem() {
      if (this.choosedNum !== null) {
        this.choosedNum = null;
        //保存答案, 题目索引加一，跳到下一题
        this.addNum(this.choosedId);
      } else {
        alert("您还没有选择答案哦");
      }
    },

    //到达最后一题，提交，清空定时器，跳转分数页面
    submitAnswer() {
      if (this.choosedNum !== null) {
        this.choosedNum = null;
        this.addNum(this.choosedId);
        clearInterval(this.timer);
        this.$router.push("score");
      } else {
        alert("您还没有选择答案哦");
      }
    }
  }
};
</script>

<style  lang="less">
body {
  background: url("../../images/1-1.jpg");
  background-size: 100% 100%;
}
#item {
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
  .item_logo {
    width: 80%;
    height: 11.625rem;
    position: absolute;
    top: 4rem;
    left: 1rem;
    background: url("../../images/2-1.png") no-repeat;
    background-size: 100% 100%;
    .item_list_container {
      position: absolute;
      top: 2.2rem;
      left: 3rem;
      .item_title {
        font-size: 0.65rem;
        color: #fff;
        line-height: 0.7rem;
      }
      .item_list {
        font-size: 0;
        margin-top: 0.4rem;
        width: 10rem;
        span {
          color: #fff;
          font-size: 0.6rem;
          display: inline-block;
          vertical-align: middle;
        }
        .option_style {
          height: 0.725rem;
          width: 0.725rem;
          line-height: 0.725rem;
          border: 1px solid #fff;
          border-radius: 50%;
          text-align: center;
          margin-right: 0.3rem;
          font-size: 0.5rem;
          font-family: "Arial";
        }
        .option_detail {
          width: 7.5rem;
          font-size: 0.48rem;
          padding-top: 0.1rem;
        }
        .has_choosed {
          background-color: #ffd400;
          color: #575757;
          border-color: #ffd400;
        }
      }
    }
  }
  .next {
    background: url("../../images/2-2.png") no-repeat;
    background-size: 100% 100%;
  }
  .submit {
    background: url("../../images/3-1.png") no-repeat;
    background-size: 100% 100%;
  }
}
</style>
