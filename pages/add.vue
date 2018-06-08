<template>
  <div class="add">
    <div class="add-header">
      <div class="add-header-cancel" @click="goBack()">取消</div>
      <h1 class="add-header-title">发文章</h1>
      <div class="add-header-confirm">发送</div>
    </div>
    <textarea class="add-input" placeholder="请编辑您的文章"></textarea>
  </div>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
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
  .add {
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    background: #f5f5f5;
  }
  .add-header {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding: 8px 10px;
    width: 100%;
  }
  .add-header-title {
    font-size: 16px;
    line-height: 1;
    font-weight: normal;
  }
  .add-header-cancel, .add-header-confirm {
    padding: 4px 8px;
    font-size: 16px;
    line-height: 1;
    border-radius: 4px;
  }
  .add-header-cancel {
    color: #333;
  }
  .add-header-confirm {
    color: #fff;
    background: #4dd0e1;
  }
  .add-input {
    flex: 1;
    display: block;
    padding: 10px 18px;
    width: 100%;
    font-size: 16px;
    line-height: 1.5;
    appearance: none;
    background: #fff;
    resize: none;
    border: 0;
    outline: 0;
  }
</style>
