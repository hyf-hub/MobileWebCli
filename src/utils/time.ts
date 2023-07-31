import dayjs from 'dayjs'
import type { ConfigType } from 'dayjs'
export const timeFormat = (time: ConfigType, format: string | undefined): string =>
  time ? dayjs(time).format(format || 'YYYY-MM-DD') : '-'
export const isValidTime = (date: string | number | Date) => dayjs(date).isValid()
export const formatYearTime = (time: string | number | Date) => {
  if (!isValidTime(time)) return '-'
  const date = new Date(time)
  // 不是今年就显示年份 否则就不显示
  const format =
    date.getFullYear() === new Date().getFullYear() ? 'MM-DD HH:mm' : 'YYYY-MM-DD HH:mm'
  return timeFormat(date, format)
}