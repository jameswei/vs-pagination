<template>
  <div class="pagination">
    <div
      class="button prev"
      :class="[size ? size : '', { disabled: isFirstPage }]"
      @click="prev"
    ></div>
    <div class="button pager" :class="[size ? size : '']" :style="cssVars">
      {{ pageNo }}
    </div>
    <div
      class="button next"
      :class="[size ? size : '', { disabled: isLastPage }]"
      @click="next"
    ></div>
  </div>
</template>
<script>
export default {
  props: {
    size: {
      type: String,
      default: 'small'
    },
    color: {
      type: String,
      default: '#1890ff'
    },
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
    },
    cssVars() {
      return {
        '--vs-pagination-bg-color': this.color
      }
    }
  },
  methods: {
    prev() {
      if (this.isFirstPage) return
      this.emit(this.pageNo - 1)
    },
    next() {
      if (this.isLastPage) return
      this.emit(this.pageNo + 1)
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
    text-align: center;
  }
  .small {
    font-size: 12px;
    line-height: 22px;
    height: 22px;
    min-width: 22px;
    border-radius: 3px;
    margin: 0 3px;
  }
  .large {
    font-size: 13px;
    height: 28px;
    line-height: 28px;
    min-width: 30px;
    border-radius: 2px;
    margin: 0 5px;
  }
  .pager {
    background-color: var(--vs-pagination-bg-color);
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
