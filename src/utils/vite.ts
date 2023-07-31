/**
 * @description 动态获取图片的方法 不然不会打包图片
 * @param name 图片name
 * @returns 图片的真实地址
 */
export const getImage = (name: string): string => {
  // 将图片导为模块
  const picModules = import.meta.glob('../assets/images/**', { eager: true })
  // 获取图片模块
  // 获取指定的图片
  const path = `../assets${name}`
  return (picModules[path] as any).default
}