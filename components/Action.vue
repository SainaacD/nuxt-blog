<template>
  <section class="action">
    <div v-for="(item, index) in data" :key="`action-${index}`" :class="index===choose?'action-btn-active':''" @click="action(index, item.link)" class="action-btn">
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
      //     content: 'home',
      //     link: 'index'
      //   },
      //   {
      //     iconfont: true,
      //     content: 'tags',
      //     link: 'tags'
      //   },
      //   {
      //     iconfont: true,
      //     content: 'plus icon-special',
      //     link: 'add'
      //   },
      //   {
      //     iconfont: true,
      //     content: 'search',
      //     link: 'search'
      //   },
      //   {
      //     iconfont: true,
      //     content: 'user',
      //     link: 'user'
      //   }
      // ]
    }
  },
  methods: {
    action(index, link) {
      this.$store.commit('action/change', index)
      this.$router.push({
        name: link
      })
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
  text-decoration: none;
  flex: 1;
}
.action-btn .icon {
  font-size: 20px;
  line-height: 2;
  color: #999;
}
.action-btn-active .icon {
  color: #4dd0e1;
}
.action-btn .icon-special {
  padding: 4px;
  color: #fff;
  background: #4dd0e1;
  border-radius: 100%;
}
</style>
