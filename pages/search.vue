<template>
  <div class="search">
    <div class="search-header">
      <div class="search-input-wrap">
        <i class="icon iconfont icon-search"></i>
        <input class="search-input" type="text" placeholder="请输入搜索内容"/>
      </div>
      <div class="search-cancel" @click="goBack()">取消</div>
    </div>
    <Action :data="action" :choose="choose"/>
  </div>
</template>

<script>

import Action from '~/components/Action.vue'

export default {
  components: {
    Action
  },
  computed: {
    choose() {
      return this.$store.state.action.choose
    }
  },
  data() {
    return {
      action: [
        {
          iconfont: true,
          content: 'home',
          link: 'index'
        },
        {
          iconfont: true,
          content: 'tags',
          link: 'tags'
        },
        {
          iconfont: true,
          content: 'plus icon-special',
          link: 'add'
        },
        {
          iconfont: true,
          content: 'search',
          link: 'search'
        },
        {
          iconfont: true,
          content: 'user',
          link: 'user'
        }
      ]
    }
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
  .search {
    min-height: 100vh;
    background: #f5f5f5;
  }
  .search-header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 8px 10px;
  }
  .search-input-wrap {
    flex: 1;
  }
  .search-cancel {
    padding: 4px 8px;
    font-size: 16px;
    line-height: 1;
    color: #333;
    border-radius: 4px;
  }
</style>
