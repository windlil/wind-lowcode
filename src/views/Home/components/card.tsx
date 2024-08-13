import { Card as AntdCard, Tooltip } from 'antd'
import { FC } from 'react'
import { Link, Pencil, Ellipsis } from 'lucide-react'

const { Meta } = AntdCard

const Card: FC<{
  title: string
  desc: string
}> = ({
  title,
  desc
}) => {
  return (
    <div className='relative'>
      <Tooltip title={'创建时间：2024.8.1'} className='absolute z-[999] right-2 top-4'>
        <Ellipsis className='h-4' />
      </Tooltip>
      <AntdCard
        hoverable
        style={{ width: 280, height: 170 }}
        className='flex flex-col justify-between'
        actions={[
          <div className='flex items-center justify-center'>
            <Link className='h-4' />
            <span>访问</span>
          </div>,
          <div className='flex items-center justify-center'>
            <Pencil className='h-4' />
            <span>编辑</span>
          </div>
        ]}
      >
        <Meta
          title={title}
          description={<div className='overflow-text'>{desc}</div>}
        />
      </AntdCard>
    </div>
  )
}

export default Card