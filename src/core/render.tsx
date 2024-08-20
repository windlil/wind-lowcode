import { RenderComponents } from '@/types/components'
import { Button } from 'antd'
import Space from '@/components/ComponentItem/Space'
import { createElement, ReactNode } from 'react'

const COMPONENT_MAP: any = {
  Button: Button,
  Space: Space
}

export const startRenderComponents = (renderComponents: RenderComponents | undefined): ReactNode => {
  if (!renderComponents?.length) return null
  return renderComponents.map(component => {
    const { name, props, id } = component
    if (!COMPONENT_MAP[name]) return null
    const target = COMPONENT_MAP[name]
    return createElement(target, {key: id, ...props, id}, props?.children ?? startRenderComponents(component?.children) ?? [])
  })
}