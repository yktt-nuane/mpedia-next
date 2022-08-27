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
      <Flex padding={1} justifyContent='center' backgroundColor='primary'>
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
            <Text as='p' marginTop={0} color='white' variant='medium'>
              well-trusted <b>M</b>edical <b>Pedia</b> for Professionals.
            </Text>
          </Box>
        </Flex>
      </Flex>
      <Flex marginLeft={2} padding={2} justifyContent='center'>
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
  const article = await client.get({
    endpoint: 'articles',
    queries: { limit: 100 },
  })
  const tag = await client.get({
    endpoint: 'tags',
    queries: {
      filters:
        'tag_name[not_equals]集中治療[and]tag_name[not_equals]麻酔[and]tag_name[not_equals]抄読会[and]tag_name[not_equals]勉強会',
      limit: 50,
    },
  })

  return {
    props: {
      articles: article.contents,
      tags: tag.contents,
    },
    revalidate: 60,
  }
}
