import Link from 'next/link'
import { useRouter } from 'next/router'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import ArticleCard from 'components/organisms/ArticleCard'
import ArticleCardCarousel from 'components/organisms/ArticleCardCarousel'
import Layout from 'components/templates/Layout'
import { client } from 'libs/client'
import type { Article } from 'types'

export default function TagsId({ articles }: any) {
  const router = useRouter()

  return (
    <Layout>
      <Flex paddingBottom={2} justifyContent='center'>
        <Box
          paddingLeft={{ base: 2, md: 0 }}
          paddingRight={{ base: 2, md: 0 }}
          width={{ base: '100%', md: '1600px' }}
        >
          <Text as='h2' fontWeight='bold' variant='extraLarge' paddingLeft={3}>
            {router.query.id}
          </Text>
          <Box marginBottom={3}>
            <ArticleCardCarousel>
              {articles.map((p: Article) => (
                <Box paddingLeft={1} key={p.id}>
                  <Link href={`/articles/${p.id}`} passHref>
                    <a>
                      <ArticleCard
                        variant='small'
                        title={p.title}
                        updatedAt={p.updatedAt}
                        tag_name={p.tags.map((tag) => (
                          <Text># {tag.tag_name} </Text>
                        ))}
                      />
                    </a>
                  </Link>
                </Box>
              ))}
            </ArticleCardCarousel>
          </Box>
        </Box>
      </Flex>
    </Layout>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: 'tags', queries: { limit: 100 } })
  /* eslint @typescript-eslint/no-explicit-any: 0 */
  const paths = data.contents.map((content: any) => `/tags/${content.id}`)
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理を記述します
/* eslint @typescript-eslint/no-explicit-any: 0 */
export const getStaticProps = async (context: any) => {
  const id = context.params.id
  const data = await client.get({
    endpoint: 'articles',
    queries: { filters: `tags[contains]${id}`, limit: 100 },
  })

  return {
    props: {
      articles: data.contents,
    },
    revalidate: 60,
  }
}
