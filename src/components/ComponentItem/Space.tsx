import { ComponentType } from '@/types/components'
import { Space as AntdSpace } from 'antd'
import { FC } from 'react'
import { useDrop } from 'react-dnd'

const Space= (props: any) => {
  const { children, id } = props

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
      <AntdSpace
        ref={dropRef}
        className='p-[16px]'
        style={{ border: canDrop ? '1px solid #d4d4d8' : 'none'  }}
        {...props}
      >
        暂无内容
      </AntdSpace>
    )
  }

  return (
    <AntdSpace
      ref={dropRef}
      className='p-[16px]'
      style={{ border: canDrop ? '1px solid #d4d4d8' : 'none' }} 
      {...props}
    >
      {children}
    </AntdSpace>
  )
}

export default Space