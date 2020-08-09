# vs-pagination

vs-pagination, a simple paginator component for Vue. Compared with other popular paginator, vs-pagination doesn't require total page or count, which leads counting-like queries on backend for each paged request.
Although there're few approaches to avoid such redundant query against to database, in most CRUD kinda applications, users don't care about how many pages or records in a given list view, they just go-to-next and so forth till there's no data shown.

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

| Attribute           | Effect                   | Type   | Require | Default                                |
| ------------------- | ------------------------ | ------ | ------- | -------------------------------------- |
| page-no             | page number              | Number | Yes     | -                                      |
| page-size           | page size                | Number | Yes     | -                                      |
| current-page-length | current page list length | Number | Yes     | -                                      |
| size                | paginator size           | String | No      | small (accepted values: small / large) |
| color               | paginator color          | String | No      | #1890ff (blue)                         |

### Methods

| Method         | Effect                            | Parameters               |
| -------------- | --------------------------------- | ------------------------ |
| current-change | triggers when page number changed | Function(currentPage) {} |

## Example

Full code.

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
