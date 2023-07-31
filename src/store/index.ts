import { defineStore } from 'pinia'
export const useCommonstore = defineStore('common', {
  state: () => ({
    navTitle: '社区活动',
    isShwoShare: false
  }),
  actions: {
    setNavTitle(title: string) {
      document.title = title
      this.navTitle = title
    },
  }
})