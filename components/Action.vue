<template>
  <section class="action">
    <div v-for="(item, index) in data" :key="`action-${index}`" :class="index===choose?'action-btn-active':''" @click="action(index)" class="action-btn">
      <i v-if="item.iconfont" class="icon iconfont" :class="`icon-${item.content}`"></i>
      <span v-else>{{item.content}}</span>
    </div>
  </section>
</template>

<script>

export default {
  props: {
    data: {
      type: Array
    },
    choose: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      // data: [
      //   {
      //     iconfont: true,
      //     content: 'home'
      //   },
      //   {
      //     iconfont: true,
      //     content: 'tags'
      //   },
      //   {
      //     iconfont: true,
      //     content: 'plus icon-special'
      //   },
      //   {
      //     iconfont: true,
      //     content: 'search'
      //   },
      //   {
      //     iconfont: true,
      //     content: 'user'
      //   }
      // ]
    }
  },
  methods: {
    action(index) {
      this.$emit('action', index)
      console.log(index)
    }
  }
}
</script>

<style>
.action {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-wrap: row nowrap;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #fff;
  box-shadow: -1px 0 1px 1px #f5f5f5;
}
.action-btn {
  flex: 1;
}
.action-btn .icon {
  font-size: 20px;
  line-height: 2;
  color: #999;
}
.action-btn-active .icon {
  color: #666;
}
.action-btn .icon-special {
  padding: 4px;
  color: #fff;
  background: #666;
  border-radius: 100%;
}
</style>
