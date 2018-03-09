import mock from './index.js'
import lists from './data/list.js'

const data = {
  data: lists
}

const bootstrap = () => {
  mock.onPost('/api/lists').reply((config) => {
    return new Promise((resolve, reject) => {
      resolve([200, data])
    })
  })
}

export default {
  bootstrap
}