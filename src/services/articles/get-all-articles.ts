import type { ApiContext, Tag, Article } from 'types'
import { fetcher } from 'utils'

export type GetAllArticlesParams = {
  /**
   * 記事カテゴリ
   */
  tag?: Tag
  /**

  /**
   * 所有するユーザーID
   */
  userId?: number
  /**
   * ソートするキー
   */
  sort?: keyof Omit<Article, 'owner'>
  /**
   * 昇順or降順
   */
  order?: 'asc' | 'desc'
  /**
   * 取得数
   */
  limit?: number
  /**
   * ページ数
   */
  page?: number
}

/**
 * プロダクトAPI（一覧取得）
 * @param context APIコンテキスト
 * @param params 検索条件
 * @returns 記事一覧
 */
// eslint-disable-next-line complexity
const getAllArticles = async (
  context: ApiContext,
  {
    tag,
    userId,
    page,
    limit,
    sort = 'id',
    order = 'desc',
  }: GetAllArticlesParams = {},
): Promise<Article[]> => {
  const path = `${context.apiRootUrl.replace(/\/$/g, '')}/articles`
  const params = new URLSearchParams()

  tag && params.append('tag', `${tag}`)
  userId && params.append('owner.id', `${userId}`)
  page && params.append('_page', `${page}`)
  limit && params.append('_limit', `${limit}`)
  sort && params.append('_sort', sort)
  order && params.append('_order', order)
  const query = params.toString()

  return await fetcher(query.length > 0 ? `${path}?${query}` : path, {
    headers: {
      Origin: '*',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      credentials: 'include',
    },
  })
}

export default getAllArticles
