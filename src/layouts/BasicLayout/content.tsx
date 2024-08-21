import { startRenderComponents } from '@/core/render'
import useComponentStore from '@/stores/components'
import Mask from '@/components/Mask'
import { ComponentType } from '@/types/components'
import { useEffect, useRef, useState } from 'react'
import { useDrop } from 'react-dnd'

const Content = () => {
  const [curComponentId, setCurComponentId] = useState<string | number>(0)
  const renderComponents = useComponentStore(state => state.renderComponents)
  const setCurComponent = useComponentStore(state => state.setCurComponent)
  const MaskRef = useRef<{
    updatePosition: () => void
  }>(null)

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
    if (MaskRef?.current) {
      MaskRef.current.updatePosition()
    }
  }, [curComponentId])

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
            setCurComponentId(attribute)
            return
          }
        }
      }
      setCurComponentId(0)
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
      {curComponentId ? (
        <Mask
          ref={MaskRef}
          curComponentId={curComponentId}
          containerClassName='#renderComponentsContainer'
          offsetContainerClassName='#renderComponentsContainer'
        />
      ) : null}
    </div>
  )
}

export default Content