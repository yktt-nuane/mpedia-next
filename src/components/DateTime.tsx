import dayjs from 'dayjs'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'

import { FC } from 'react'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'

type Props = {
  datetime: string
}

export const DateTime: FC<Props> = ({ datetime }) => {
  dayjs.extend(utc)
  dayjs.extend(timezone)
  const formatDate = dayjs.utc(datetime).tz('Asia/Tokyo').format('YYYY-MM-DD')
  return (
    <Box>
      <Text
        as='time'
        dateTime={formatDate}
        fontSize={'13px'}
        textAlign={'right'}
      >
        {formatDate}
      </Text>
    </Box>
  )
}
