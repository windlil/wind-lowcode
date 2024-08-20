import { startRenderComponents } from '@/core/render'
import useComponentStore from '@/stores/components'
import { ComponentType } from '@/types/components'
import { useDrop } from 'react-dnd'

const Content = () => {
  const { renderComponents } = useComponentStore()
  const [{ canDrop }, dropRef] = (useDrop as any)(() => {
    return {
      accept: [
        ComponentType.Button,
        ComponentType.Space,
      ],
      drop(_: any, monitor: any) {
        const didDrop = monitor.didDrop()
        if (didDrop) {
          return
        }
  
        return {
          id: 0,
        }
      },
      collect: (monitor: any) => ({
        canDrop: monitor.canDrop(),
      }),
    }
  })

  return (
    <div 
      ref={dropRef}
      className='w-full h-full p-6'
      style={{
        border: canDrop ? '1px solid #ccc' : 'none'
      }}
    >
      {startRenderComponents(renderComponents)}
    </div>
  )
}

export default Content