import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { client } from '../../libs/client'
import type { Article } from '../../types'
import Button from 'components/atoms/Button'
import Separator from 'components/atoms/Separator'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'
import ArticleCard from 'components/organisms/ArticleCard'
import Layout from 'components/templates/Layout'

type Props = {
  article: Article
}

export default function Article({ article }: Props) {
  return (
    <Layout>
      <Box
        paddingLeft={{
          base: 2,
          md: 3,
        }}
        paddingRight={{
          base: 2,
          md: 3,
        }}
        paddingTop={2}
        paddingBottom={2}
      >
        <Flex
          paddingTop={2}
          paddingBottom={2}
          paddingLeft={{ base: 2, md: 0 }}
          paddingRight={{ base: 2, md: 0 }}
          justifyContent='center'
          flexDirection={{ base: 'column', md: 'row' }}
        >
          <Box>
            <Flex paddingTop={2} paddingBottom={0} justifyContent='center'>
              <ArticleCard
                variant='detail'
                title={article.title}
                updatedAt={article.updatedAt}
                tag_name={article.tags.map((tag) => (
                  <Button key={tag.id} padding={1} margin={1}>
                    <Link href={`/tags/${tag.id}`}>
                      <Text as='a' color='white' padding={1} key={tag.id}>
                        # {tag.tag_name}
                      </Text>
                    </Link>
                  </Button>
                ))}
              />
            </Flex>
            <Separator />
            <Flex paddingTop={2} paddingBottom={1} justifyContent='center'>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${article.body}`,
                }}
              />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id
  const idExceptArray = id instanceof Array ? id[0] : id
  const data = await client.get({
    endpoint: 'articles',
    queries: { limit: 100 },
    contentId: idExceptArray,
  })

  return {
    props: {
      article: data,
    },
  }
}
