import { ComponentType } from '@/types/components'
import { FC } from 'react'
import { useDrag } from 'react-dnd'

interface ComponentItemProps {
  name: string
  desc: string
  onDragEnd?: any
}

const setComponentDefaltProps = (name: string) => {
  switch(name) {
    case ComponentType.Button:
      return {children: '按钮', type: 'primary'}
    case ComponentType.Space:
      return {size: 'middle'}
  }
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
          props: setComponentDefaltProps(name),
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
      className='font-mono border-dashed border-[1px] border-[#cccccc] text-zinc-500 cursor-move py-[2px] px-8 rounded-sm'
      style={{
        opacity: isDragging ? 0.4 : 1
      }}
    >
      {desc}
    </div>
  )
}

export default ComponentItem