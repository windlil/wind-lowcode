import { ComponentType } from '@/types/components'
import { FC } from 'react'
import { useDrag } from 'react-dnd'

interface ComponentItemProps {
  name: string
  desc: string
  onDragEnd?: any
}

const ComponentItem: FC<ComponentItemProps> = ({ name, onDragEnd, desc }) => {
  const [{ isDragging }, dragRef] = useDrag(() => {
    return {
      type: name,
      end(_, monitor) {
        const dropResult = monitor.getDropResult()

        if (!dropResult) return

        onDragEnd && typeof onDragEnd === 'function' && onDragEnd({
          name,
          props: name === ComponentType['Button'] ? {children: '按钮'} : {},
          ...dropResult
        })
      },
      collect(monitor) {
        return {
          isDragging: monitor.isDragging()
        }
      }
    }
  })

  return (
    <div
      ref={dragRef}
      className='font-mono border-dashed border-[1px] border-[#b4b4b4] bg-white cursor-move py-1 px-8 rounded-sm'
      style={{
        opacity: isDragging ? 0.4 : 1
      }}
    >
      {desc}
    </div>
  )
}

export default ComponentItem