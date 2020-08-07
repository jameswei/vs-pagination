<template>
  <div id="app">
    <vs-pagination
      :page-no="pageNo"
      :page-size="pageSize"
      :current-page-length="list.length"
      @current-change="onPageChanged"
    />
  </div>
</template>

<script>
import VsPagination from './components/VsPaginatin'
export default {
  name: 'App',
  components: {
    VsPagination
  },
  data() {
    return {
      pageNo: 1,
      pageSize: 20,
      list: []
    }
  },
  created() {
    this.fetchList()
  },
  methods: {
    async fetchList() {
      this.list = await fetch(
        `https://www.yuque.com/api/explore/recommends?limit=${this.pageSize}&page=${this.pageNo}&type=Doc`
      ).then(res => res.json())
    },
    onPageChanged(currentPage) {
      this.pageNo = currentPage
      this.fetchList()
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
