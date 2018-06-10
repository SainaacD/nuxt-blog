<template>
  <div class="tags">
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
  }
}
</script>

<style>
</style>
