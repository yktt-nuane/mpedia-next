import { ComponentMeta } from '@storybook/react'
import Header from './index'
import { AuthContextProvider } from 'contexts/AuthContext'

export default { title: 'organisms/Header' } as ComponentMeta<typeof Header>

export const NoLogin = () => <Header />

export const Login = () => {
  const authUser = {
    id: 1,
    username: 'dummy',
    displayName: 'Tatsuro yokoyama',
    email: 'yktt@example.com',
    description: '',
  }

  return (
    <AuthContextProvider
      context={{ apiRootUrl: 'https://dummy' }}
      authUser={authUser}
    ></AuthContextProvider>
  )
}
