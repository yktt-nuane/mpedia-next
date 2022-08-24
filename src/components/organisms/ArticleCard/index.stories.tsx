import { ComponentMeta, ComponentStory } from '@storybook/react'
import ArticleCard from './index'

export default {
  title: 'Organisms/ArticleCard',
  argTypes: {
    title: {
      control: { type: 'text' },
      description: '記事名',
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      options: ['listing', 'small', 'detail'],
      control: { type: 'radio' },
      defaultValue: 'listing',
      description: 'バリアント（表示スタイル）',
      table: {
        type: { summary: 'listing | small | detail' },
        defaultValue: { summary: 'primary' },
      },
    },
    backgroundColor: {
      control: { type: 'color' },
      description: '背景色',
      table: {
        type: { summary: 'string' },
      },
    },
    width: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '横幅',
      table: {
        type: { summary: 'number' },
      },
    },
    height: {
      control: { type: 'number' },
      defaultValue: 320,
      description: '高さ',
      table: {
        type: { summary: 'number' },
      },
    },
  },
} as ComponentMeta<typeof ArticleCard>

const Template: ComponentStory<typeof ArticleCard> = (args) => (
  <ArticleCard {...args} />
)

// Listingカード
export const Listing = Template.bind({})
Listing.args = {
  variant: 'listing',
  title: 'ナイスシューズ',
}

// Smallカード
export const Small = Template.bind({})
Small.args = {
  variant: 'small',
  title: 'ナイスシューズ',
}

// Detailカード
export const Detail = Template.bind({})
Detail.args = {
  variant: 'detail',
  title: 'ナイスシューズ',
}
