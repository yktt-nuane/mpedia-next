import Flex from 'components/layout/Flex'

interface ArticleCardCarouselProps {
  children?: React.ReactNode
}

/**
 * 記事カードカルーセル
 */
const ArticleCardCarousel = ({ children }: ArticleCardCarouselProps) => {
  return (
    <Flex flexWrap={'wrap'} width='100%'>
      {children}
    </Flex>
  )
}

export default ArticleCardCarousel
