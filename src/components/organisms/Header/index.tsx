import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/link'
import styled from 'styled-components'
import AppLogo from 'components/atoms/AppLogo'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'

// ヘッダーのルート
const HeaderRoot = styled.header`
  height: 88px;
  padding: ${({ theme }) => theme.space[2]} 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`

// ナビゲーション
const Nav = styled(Flex)`
  & > span:not(:first-child) {
    margin-left: ${({ theme }) => theme.space[2]};
  }
`

// ナビゲーションのリンク
const NavLink = styled.span`
  display: inline;
`

// アンカー
const Anchor = styled(Text)`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`

/**
 * ヘッダー
 */
const Header = () => {
  const { user, error, isLoading } = useUser()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error.message}</div>

  if (user) {
    return (
      <HeaderRoot>
        <Flex paddingLeft={3} paddingRight={3} justifyContent='space-between'>
          <Nav as='nav' height='56px' alignItems='center'>
            <NavLink>
              <Link href='/' passHref>
                <Anchor as='a'>
                  <AppLogo />
                </Anchor>
              </Link>
            </NavLink>
            <NavLink>
              <Box display={{ base: 'none', md: 'block' }}>
                <Link href='/anesthesia' passHref>
                  <Anchor as='a'>麻酔</Anchor>
                </Link>
              </Box>
            </NavLink>
            <NavLink>
              <Box display={{ base: 'none', md: 'block' }}>
                <Link href='/tags/icu' passHref>
                  <Anchor as='a'>集中治療</Anchor>
                </Link>
              </Box>
            </NavLink>
            <NavLink>
              <Box display={{ base: 'none', md: 'block' }}>
                <Link href='/tags/study' passHref>
                  <Anchor as='a'>勉強会</Anchor>
                </Link>
              </Box>
            </NavLink>
            <NavLink>
              <Box display={{ base: 'none', md: 'block' }}>
                <Link href='/tags/paper' passHref>
                  <Anchor as='a'>抄読会</Anchor>
                </Link>
              </Box>
            </NavLink>
            <NavLink>
              <Box display={{ base: 'none', md: 'block' }}>
                <Link href='/guideline' passHref>
                  <Anchor as='a'>ガイドライン</Anchor>
                </Link>
              </Box>
            </NavLink>
          </Nav>
          <Nav as='nav' height='56px' alignItems='center'>
            <NavLink>
              <Text>
                Welcome {user.name}! <Link href='/api/auth/logout'>Logout</Link>
              </Text>
            </NavLink>
          </Nav>
        </Flex>
      </HeaderRoot>
    )
  }
  return (
    <HeaderRoot>
      <Flex paddingLeft={3} paddingRight={3} justifyContent='space-between'>
        <Nav as='nav' height='56px' alignItems='center'>
          <NavLink>
            <Link href='/' passHref>
              <Anchor as='a'>
                <AppLogo />
              </Anchor>
            </Link>
          </NavLink>
          <NavLink>
            <Box display={{ base: 'flex', md: 'block' }}>
              <Link href='/anesthesia' passHref>
                <Anchor as='a'>麻酔</Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box display={{ base: 'flex', md: 'block' }}>
              <Link href='/tags/icu' passHref>
                <Anchor as='a'>集中治療</Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box display={{ base: 'flex', md: 'block' }}>
              <Link href='/tags/study' passHref>
                <Anchor as='a'>勉強会</Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box display={{ base: 'flex', md: 'block' }}>
              <Link href='/tags/paper' passHref>
                <Anchor as='a'>抄読会</Anchor>
              </Link>
            </Box>
          </NavLink>
          <NavLink>
            <Box display={{ base: 'none', md: 'block' }}>
              <Link href='/guideline' passHref>
                <Anchor as='a'>ガイドライン</Anchor>
              </Link>
            </Box>
          </NavLink>
        </Nav>
        <Nav as='nav' height='56px' alignItems='center'>
          <NavLink>
            <Text>
              <Link href='/api/auth/login'>Login</Link>
            </Text>
          </NavLink>
        </Nav>
      </Flex>
    </HeaderRoot>
  )
}

export default Header
