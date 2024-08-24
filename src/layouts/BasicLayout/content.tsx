import { startRenderComponents } from '@/core/render'
import useComponentStore from '@/stores/components'
import Mask from '@/components/Mask'
import { ComponentType } from '@/types/components'
import { useEffect } from 'react'
import { useDrop } from 'react-dnd'

const Content = () => {
  const renderComponents = useComponentStore(state => state.renderComponents)
  const curComponent = useComponentStore(state => state.curComponent)
  const setCurComponent = useComponentStore(state => state.setCurComponent)

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

  useEffect(() => {
    const container = document.getElementById('renderComponentsContainer')

    const createMask = (e: MouseEvent) => {
      const path = e.composedPath()
      if (path?.length) {
        for (let i = 0; i < path.length; i++) {
          const el = path[i] as HTMLElement
          const attribute = el?.getAttribute ? el?.getAttribute('data-component-id') : null
          if (attribute) {
            setCurComponent(attribute)
            return
          }
        }
      }
      setCurComponent(0)
    }

    container?.addEventListener('click', createMask)

    return () => {
      container?.removeEventListener('click', createMask)
    }
  }, [setCurComponent])

  return (
    <div 
      id='renderComponentsContainer'
      ref={dropRef}
      className='w-full h-full p-2 bg-white relative'
      style={{
        border: canDrop ? '1px solid #ccc' : 'none'
      }}
    >
      {startRenderComponents(renderComponents)}
      {curComponent ? (
        <Mask
          renderComponents={renderComponents}
          curComponentId={curComponent?.id}
          containerClassName='#renderComponentsContainer'
          offsetContainerClassName='#renderComponentsContainer'
        />
      ) : null}
    </div>
  )
}

export default Content