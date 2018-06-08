<template>
  <article class="card">
    <h3 class="card-title">{{title}}</h3>
    <p class="card-detail">{{detail}}</p>
    <div class="card-bottom">
      <div class="card-bottom-item">
        <i class="icon iconfont icon-heart"></i>{{like}}
      </div>
      <div class="card-bottom-item">
        <i class="icon iconfont icon-message"></i>{{comment}}
      </div>
      <div class="card-bottom-item">
        {{time}}
      </div>
    </div>
  </article>
</template>

<script>

export default {
  props: {
    type: {
      type: Number
    },
    title: {
      type: String
    },
    detail: {
      type: String
    },
    like: {
      type: Number
    },
    comment: {
      type: Number
    },
    time: {
      type: String
    }
  },
  data () {
    return {
      // title: '标题',
      // detail: '详情',
      // like: 10,
      // comment: 20,
      // time: '2018-10-12 16:20:14'
    }
  },
  methods: {
  }
}
</script>

<style>
  .card {
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 4px 6px;
    padding: 14px 20px;
    text-align: left;
    background: #fff;
    border-radius: 8px;
  }
  .card-title {
    font-size: 18px;
    line-height: 1.5;
    color: #333;
  }
  .card-detail {
    font-size: 16px;
    line-height: 1.5;
    color: #666;
  }
  .card-bottom {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 16px;
    line-height: 1.5;
    color: #ccc;
  }
</style>
