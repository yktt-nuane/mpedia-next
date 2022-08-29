import {
  getSession,
  getServerSidePropsWrapper,
  Claims,
} from '@auth0/nextjs-auth0'
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
  user?: Claims
}

export default function Article({ user, article }: Props) {
  if (!user || !article) {
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
              <Text as='p' marginTop={0} color='white' variant='medium'>
                個人が運営する勉強会や抄読会資料の共有サイトです。
              </Text>
              <Text as='p' marginTop={0} color='white' variant='medium'>
                内容には、私見やローカルルールが含まれていますので、参考資料としてご覧ください。
              </Text>
              <Text as='p' marginTop={0} color='white' variant='medium'>
                閲覧に際して、ログインをお願い致します。
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Layout>
    )
  }
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
            <Flex
              marginLeft={2}
              paddingTop={2}
              paddingBottom={0}
              justifyContent='center'
            >
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

export const getServerSideProps: GetServerSideProps = getServerSidePropsWrapper(
  async (ctx) => {
    const { req, res } = ctx
    const id = ctx.params?.id
    const idExceptArray = id instanceof Array ? id[0] : id
    const session = await getSession(req, res)
    if (!session) {
      return { props: {} }
    }
    const data = await client.get({
      endpoint: 'articles',
      queries: { limit: 100 },
      contentId: idExceptArray,
    })

    return {
      props: {
        article: data,
        user: session.user,
      },
    }
  },
)
