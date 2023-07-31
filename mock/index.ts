import type { MockMethod } from 'vite-plugin-mock'
import Mock, { Random } from 'mockjs'
const rules: MockMethod[] = [
  {
    url: '/news/list',
    method: 'get',
    response: () => {
      const data: any[] = []
      for (let i = 0; i < 10; i++) {
        data.push(
          Mock.mock({
            "id": "@id",
            "title": Random.cparagraph(2),
            "avatar": Random.image('200x100'),
            "startTime": Random.datetime('yyyy-MM-dd  HH:mm:ss'),
            "endTime": Random.now('second'),
            "tags|1-8": ['@ctitle(5)'
            ]
          }
          ))
      }
      return {
        code: 0,
        message: "获取数据成功",
        data: {
          "pageTotal": 0,
          "total": 0,
          rows: data
        },
      }
    },
  },
  {
    url: '/news/articles',
    method: 'get',
    response: () => {
      return {
        code: 0,
        message: "获取数据成功",
        data: {
          html: `<div>${Random.cparagraph(20)}</div>`,
          "title": Random.cparagraph(2),
          time: Random.datetime('yyyy-MM-dd  HH:mm:ss')
        },
      }
    },
  },
]


export default rules