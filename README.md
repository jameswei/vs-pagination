# vs-pagination

A Vue Simple Pagination without total (reduce backend every page count sql).

![](screenshot.gif)

## Installation

```bash
npm install vs-pagination -S
# or with yarn
yarn add vs-pagination
```

## Usage

Import component.

```js
import VsPagination from 'vs-pagination'

export default {
  components: {
    VsPagination
  }
}
```

In template.

```html
<vs-pagination
  :page-no="pageNo"
  :page-size="pageSize"
  :current-page-length="list.length"
  @current-change="onPageChanged"
/>
```

Set pagination data

```js
export default {
  components: {
    VsPagination
  },
  data() {
    return {
      pageNo: 1,
      pageSize: 20,
      list: []
    }
  }
}
```

## API

### Attributes

| Attribute           | Effect                   | Type   | Require | Default |
| ------------------- | ------------------------ | ------ | ------- | ------- |
| page-no             | page number              | Number | Yes     | -       |
| page-size           | page size                | Number | Yes     | -       |
| current-page-length | current page list length | Number | Yes     | -       |

### Methods

| Method         | Effect                            | Parameters               |
| -------------- | --------------------------------- | ------------------------ |
| current-change | triggers when page number changed | Function(currentPage) {} |

Full code.

## Example

```html
<script>
  import VsPagination from 'vs-pagination'

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
    methods: {
      async fetchList() {},
      onPageChanged(currentPage) {
        this.pageNo = currentPage
        this.fetchList()
      }
    }
  }
</script>
```
