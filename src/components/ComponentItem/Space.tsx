import { ComponentType } from '@/types/components'
import { Space as AntdSpace } from 'antd'
import { FC } from 'react'
import { useDrop } from 'react-dnd'

const Space: FC<{
  children: any[],
  id: number | string
}> = ({children, id}) => {
  const [{ canDrop }, dropRef] = useDrop((): any => {
    return {
      accept: [
        ComponentType.Button,
        ComponentType.Space, 
      ],
      drop: (_: any,monitor: any) => {
        const didDrop = monitor.didDrop()
        if (didDrop) return
        console.log(id)
        return {
          id
        }
      },
      collect(monitor: any) {
        return {
          canDrop: monitor.canDrop()
        }
      }
    }
  }) as any

  if (!children?.length) {
    return (
      <AntdSpace ref={dropRef} className='p-[16px]' style={{ border: canDrop ? '1px solid #ccc' : 'none' }}>
        暂无内容
      </AntdSpace>
    )
  }

  return (
    <AntdSpace ref={dropRef} className='p-[16px]' style={{ border: canDrop ? '1px solid #ccc' : 'none' }}>
      {children}
    </AntdSpace>
  )
}

export default Space