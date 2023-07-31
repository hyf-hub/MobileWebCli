import Request from '@/service'
export const getList = function (): Promise<any> {
  return Request.get({
    url: '/news/list',
  })
}
