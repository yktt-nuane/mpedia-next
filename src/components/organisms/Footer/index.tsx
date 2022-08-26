import styled from 'styled-components'
import { GitHubIcon } from 'components/atoms/IconButton'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'

const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

/**
 * フッター
 */
const Footer = () => {
  return (
    <footer>
      <Flex paddingLeft={3} paddingRight={3} justifyContent='space-between'>
        <Box
          minWidth={{ base: '100%', md: '120px' }}
          paddingRight={{ base: 0, md: 1 }}
        >
          <nav>
            <Box marginBottom={1}>
              <Text></Text>
            </Box>
          </nav>
        </Box>
        <Box
          minWidth={{ base: '100%', md: '120px' }}
          paddingRight={{ base: 0, md: 1 }}
        >
          <nav>
            <Box marginBottom={1}>
              <Text>© 2022 T.Yokoyama. All rights reserved.</Text>
            </Box>
          </nav>
        </Box>
        <Box minWidth={{ base: '100%', md: '120px' }}>
          <nav>
            <Anchor as='a' href='' target='_blank'>
              <GitHubIcon size={0} />
            </Anchor>
          </nav>
        </Box>
      </Flex>
    </footer>
  )
}

export default Footer
