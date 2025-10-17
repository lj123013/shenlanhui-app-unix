import { dayUts } from "./day";

/**
 * 将 ISO 8601 格式的时间转换为"几天前"的显示格式
 * @param isoTime ISO 8601 格式的时间字符串，如 "2025-09-04T03:30:04.000000Z"
 * @returns 格式化后的时间字符串，如 "3天前"、"2小时前" 等
 */
export function formatTimeAgo(isoTime: string): string {
  // 处理可能的微秒格式（6位小数），转换为毫秒（3位小数）
  let formattedTime = isoTime;
  if (isoTime.includes(".")) {
    // 分离日期时间和微秒部分
    const [dateTime, microseconds] = isoTime.split(".");
  if (microseconds != null && microseconds.length > 3)  {
      // 截取前3位作为毫秒
      const milliseconds = microseconds.substring(0, 3);
      formattedTime = `${dateTime}.${milliseconds}Z`;
    }
  }
  
  // 创建 DayUts 实例
  const date = dayUts(formattedTime);
  const now = dayUts();
  
  // 计算时间差（毫秒）
  const diffMs = now.valueOf() - date.valueOf();
  
  // 转换为秒
  const diffSeconds = Math.floor(diffMs / 1000);
  
  // 如果小于1分钟，显示"刚刚"
  if (diffSeconds < 60) {
    return "刚刚";
  }
  
  // 转换为分钟
  const diffMinutes = Math.floor(diffSeconds / 60);
  
  // 如果小于1小时，显示"X分钟前"
  if (diffMinutes < 60) {
    return `${diffMinutes}分钟前`;
  }
  
  // 转换为小时
  const diffHours = Math.floor(diffMinutes / 60);
  
  // 如果小于1天，显示"X小时前"
  if (diffHours < 24) {
    return `${diffHours}小时前`;
  }
  
  // 转换为天
  const diffDays = Math.floor(diffHours / 24);
  
  // 如果小于1个月（约30天），显示"X天前"
  if (diffDays < 30) {
    return `${diffDays}天前`;
  }
  
  // 如果大于等于1个月，显示具体日期
  return date.format("YYYY-MM-DD");
}