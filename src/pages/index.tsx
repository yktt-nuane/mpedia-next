import Link from 'next/link'
import { client } from '../libs/client'
import type { Article, Tag } from '../types'
import Button from 'components/atoms/Button'
import Separator from 'components/atoms/Separator'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import ArticleCard from 'components/organisms/ArticleCard'
import ArticleCardCarousel from 'components/organisms/ArticleCardCarousel'
import Layout from 'components/templates/Layout'

type Props = {
  articles: Article[]
  tags: Tag[]
}

export default function Home({ articles, tags }: Props) {
  return (
    <Layout>
      <Flex padding={2} justifyContent='center' backgroundColor='primary'>
        <Flex
          width={{ base: '100%', md: '1040px' }}
          justifyContent='space-between'
          alignItems='center'
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box width='100%'>
            <Text as='h1' marginBottom={0} color='white' variant='extraLarge'>
              MPEDIA
            </Text>
            <Text as='h1' marginTop={0} color='white' variant='extraLarge'>
              *****
            </Text>
          </Box>
          <Box width='100%'>
            <Text as='p' color='white' variant='mediumLarge'>
              病院ホームページは
              <Text
                as='a'
                style={{ textDecoration: 'underline' }}
                target='_blank'
                href='https://www.ogaki-mh.jp/'
                variant='mediumLarge'
                color='white'
              >
                こちら
              </Text>
              を見てください。
            </Text>
            <Text as='p' color='white' variant='mediumLarge'>
              まだ作成中です。
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex padding={2} justifyContent='center'>
        <Flex
          width={{ base: '100%', md: '1600px' }}
          justifyContent='space-between'
          alignItems='center'
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box width='100%'>
            <Box marginBottom={3}>
              <Box>
                {tags.map((tag) => (
                  <Button key={tag.id} padding={1} margin={1}>
                    <Link href={`/tags/${tag.id}`}>
                      <Text
                        as='a'
                        color='white'
                        padding={0}
                        variant='mediumLarge'
                        fontSize={'15px'}
                      >
                        # {tag.tag_name}
                      </Text>
                    </Link>
                  </Button>
                ))}
              </Box>
              <Separator />
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
      </Flex>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const article = await client.get({ endpoint: 'articles' })
  const tag = await client.get({ endpoint: 'tags' })

  return {
    props: {
      articles: article.contents,
      tags: tag.contents,
    },
    revalidate: 60,
  }
}
