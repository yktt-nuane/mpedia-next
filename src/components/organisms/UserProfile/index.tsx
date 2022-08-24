import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'
import Flex from 'components/layout/Flex'

interface UserProfileProps {
  /**
   * バリアント（表示スタイル）
   */
  variant?: 'normal' | 'small'
  /**
   * ユーザー名
   */
  username: string
  /**
   * ユーザーの説明
   */
  description?: string
}

/**
 * ユーザープロファイル
 */
const UserProfile = ({
  variant = 'normal',
  username,
  description,
}: UserProfileProps) => {
  return (
    <Flex>
      <Box padding={1}>
        <Flex
          height='100%'
          flexDirection='column'
          justifyContent='space-between'
        >
          <Box>
            {/* ユーザー名 */}
            <Text
              as='p'
              fontWeight='bold'
              variant='mediumLarge'
              marginTop={0}
              marginBottom={1}
            >
              {username}
            </Text>
            {/* ユーザー概要 */}
            {variant === 'normal' && (
              <Text margin={0} as='p'>
                {description}
              </Text>
            )}
          </Box>
        </Flex>
      </Box>
    </Flex>
  )
}

export default UserProfile
