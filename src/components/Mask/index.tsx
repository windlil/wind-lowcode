import { Component } from '@/types/components'
import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react'
import { createPortal } from 'react-dom'

interface Props {
  containerClassName: string
  renderComponents: Component[]
  curComponentId: string | number
  offsetContainerClassName: string
}

const Mask= forwardRef<{
  updatePosition: () => void
}, Props>(({
  containerClassName,
  curComponentId,
  offsetContainerClassName,
  renderComponents,
}, ref) => {
  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0
  })

  const updatePosition = useCallback(() => {
    const offsetContainerNode = document.querySelector(`${offsetContainerClassName}`)
    if (!offsetContainerNode) return
    const curComponentNode = document.querySelector(`[data-component-id="${curComponentId}"]`)
    if (!curComponentNode) return

    const { top, left, width, height } = curComponentNode.getBoundingClientRect()
    const { top: offsetTop, left: offsetLeft } = offsetContainerNode.getBoundingClientRect()
    setPosition({
      top: top - offsetTop + offsetContainerNode.scrollTop,
      left: left - offsetLeft,
      width,
      height
    })
  }, [curComponentId, offsetContainerClassName])

  useEffect(() => {
    updatePosition()
  }, [curComponentId, updatePosition, renderComponents])

  useImperativeHandle(ref, () => ({
    updatePosition,
  }))

  return createPortal((
    <span 
      className='bg-blue-100/20 border border-blue-400 rounded-sm'
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        width: position.width,
        height: position.height,
        pointerEvents: 'none'
      }}
    />
  ), document.querySelector(`${containerClassName}`) as Element)
})

export default Mask
