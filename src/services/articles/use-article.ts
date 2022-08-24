import useSWR from 'swr'
import type { ApiContext, Article } from 'types'

export type UseArticleProps = {
  /**
   * 取得する記事ID
   */
  id: number
  /**
   * 初期状態
   */
  initial?: Article
}

export type UseArticle = {
  /**
   * 取得する記事
   */
  article?: Article
  /**
   * ロードフラグ
   */
  isLoading: boolean
  /**
   * エラーフラグ
   */
  isError: boolean
}

/**
 * プロダクトAPI（個別取得）のカスタムフック
 * @param context APIコンテキスト
 * @param params 記事IDと初期状態
 * @returns 記事とAPI呼び出しの状態
 */
const useArticle = (
  context: ApiContext,
  { id, initial }: UseArticleProps,
): UseArticle => {
  const { data, error } = useSWR<Article>(
    `${context.apiRootUrl.replace(/\/$/g, '')}/articles/${id}`,
  )

  return {
    article: data ?? initial,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useArticle
