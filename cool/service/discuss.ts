import { request } from "@/cool/service";

/**
 * 根据不同的title获取讨论数据
 * @param title 标题类型
 * @param params 分页参数
 * @returns Promise
 */
export function getDiscussListByTitle(title: string, params: any) {
  // 根据不同的title调用不同的接口
  switch (title) {
    case "图片":
      return request({
        url: "/app/discuss/image-list",
        method: "GET",
        params
      });
    case "新闻":
      return request({
        url: "/app/discuss/news-list",
        method: "GET",
        params
      });
    case "文章":
      return request({
        url: "/app/discuss/article-list",
        method: "GET",
        params
      });
    default:
      // 默认接口
      return request({
        url: "/app/discuss/list",
        method: "GET",
        params
      });
  }
}

/**
 * 获取图片类讨论数据
 * @param params 分页参数
 * @returns Promise
 */
export function getImageDiscussList(params: any) {
  return request({
    url: "/app/discuss/image-list",
    method: "GET",
    params
  });
}

/**
 * 获取新闻类讨论数据
 * @param params 分页参数
 * @returns Promise
 */
export function getNewsDiscussList(params: any) {
  return request({
    url: "/app/discuss/news-list",
    method: "GET",
    params
  });
}

/**
 * 获取文章类讨论数据
 * @param params 分页参数
 * @returns Promise
 */
export function getArticleDiscussList(params: any) {
  return request({
    url: "/app/discuss/article-list",
    method: "GET",
    params
  });
}