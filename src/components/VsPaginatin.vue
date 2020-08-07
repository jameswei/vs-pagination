<template>
  <div class="pagination">
    <div
      class="button prev"
      :class="{ disabled: isFirstPage }"
      @click="prev"
    ></div>
    <div class="button pager">{{ pageNo }}</div>
    <div
      class="button next"
      :class="{ disabled: isLastPage }"
      @click="next"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    pageNo: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 20
    },
    currentPageLength: {
      type: Number,
      required: true
    }
  },
  computed: {
    isFirstPage() {
      return this.pageNo === 1
    },
    isLastPage() {
      return this.currentPageLength < this.pageSize
    }
  },
  methods: {
    prev() {
      if (this.isFirstPage) return
      const page = this.pageNo - 1
      this.emit(page)
    },
    next() {
      if (this.isLastPage) return
      const page = this.pageNo + 1
      this.emit(page)
    },
    emit(page) {
      this.$emit('click', page)
      this.$emit('current-change', page)
    }
  }
}
</script>
<style lang="less" scoped>
.pagination {
  display: flex;
  align-items: center;
  .button {
    background-color: #f4f4f5;
    border: 1px solid #dcdfe6;
    border-color: transparent;
    color: #606266;
    padding: 0;
    font-size: 12px;
    line-height: 20px;
    height: 22px;
    border-radius: 3px;
    margin: 0 3px;
    min-width: 22px;
    text-align: center;
  }
  .pager {
    background-color: #1890ff;
    color: #ffffff;
  }
  .prev,
  .next {
    cursor: pointer;
  }
  .prev:before {
    content: '<';
  }
  .next:before {
    content: '>';
  }
  .disabled {
    cursor: not-allowed;
    color: #c0c4cc;
  }
}
</style>
