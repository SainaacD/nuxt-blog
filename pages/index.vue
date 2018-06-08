<template>
  <section class="index">
    <div class="card-wrap">
      <Card v-for="(item, index) in blogs" :key="`card-${index}`" :title="item.title" :detail="item.detail" :like="item.like" :comment="item.comment" :time="item.time"/>
    </div>
    <Action :data="action" :choose="choose"/>
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
.index {
  min-height: 100vh;
  background: #f5f5f5;
  overflow: auto;
}
.index-title {
  margin: 0 10px;
  padding: 0;
  font-size: 20px;
  line-height: 3;
  color: #4dd0e1;
}
.choose-wrap {
  display: flex;
  flex-flow: row nowrap;
}
.card-wrap {
  padding-bottom: 40px;
  width: 100%;
}
.card-wrap .card:nth-child(2n) {
  transform:  skewX(2deg);
}
.card-wrap .card:nth-child(2n+1) {
  transform:  skewX(-2deg);
}
</style>
