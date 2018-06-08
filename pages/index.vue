<template>
  <section class="container">
    <div class="card-wrap">
      <Card v-for="(item, index) in blogs" :key="`card-${index}`" :title="item.title" :detail="item.detail" :like="item.like" :comment="item.comment" :time="item.time"/>
    </div>
    <Action :data="action" :choose="choose" @action="change"/>
  </section>
</template>

<script>
import Card from '~/components/Card.vue'
import Action from '~/components/Action.vue'

export default {
  components: {
    Card,
    Action
  },
  computed: {
    choose() {
      return this.$store.state.action.choose
    }
  },
  data() {
    return {
      blogs: [
        {
          title: '标题',
          detail: '详情',
          like: 10,
          comment: 20,
          time: '2018-10-12 16:20:14'
        },
        {
          title: '标题',
          detail: '详情',
          like: 10,
          comment: 20,
          time: '2018-10-12 16:20:14'
        },
        {
          title: '标题',
          detail: '详情',
          like: 10,
          comment: 20,
          time: '2018-10-12 16:20:14'
        },
        {
          title: '标题',
          detail: '详情',
          like: 10,
          comment: 20,
          time: '2018-10-12 16:20:14'
        }
      ],
      action: [
        {
          iconfont: true,
          content: 'home'
        },
        {
          iconfont: true,
          content: 'tags'
        },
        {
          iconfont: true,
          content: 'plus icon-special'
        },
        {
          iconfont: true,
          content: 'search'
        },
        {
          iconfont: true,
          content: 'user'
        }
      ]
    }
  },
  methods: {
    change(index) {
      this.$store.commit('action/change', index)
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}
.card-wrap {
  padding-bottom: 40px;
  width: 100%;
}
</style>
