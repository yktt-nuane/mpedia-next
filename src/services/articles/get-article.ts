import type { ApiContext, Article } from 'types'
import { fetcher } from 'utils'

export type GetArticleParams = {
  /**
   * 取得する記事
   */
  id: number
}

/**
 * プロダクトAPI（個別取得）
 * @param context APIコンテキスト
 * @param params 記事ID
 * @returns 記事
 */
const getArticle = async (
  context: ApiContext,
  { id }: GetArticleParams,
): Promise<Article> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/articles/${id}`,
    {
      headers: {
        Origin: '*',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  )
}

export default getArticle
