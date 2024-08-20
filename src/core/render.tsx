import { Component, RenderComponents } from '@/types/components'
import { Button, Space } from 'antd'
import { createElement, ReactNode } from 'react'

const COMPONENT_MAP: any = {
  Button: Button,
  Space: Space
}

export const startRenderComponents = (renderComponents: RenderComponents): ReactNode => {
  if (!renderComponents.length) return null

  return renderComponents.map(component => {
    const { name, props, id } = component
    if (!COMPONENT_MAP[name]) return null
    const target = COMPONENT_MAP[name]
    return createElement(target, {key: id, ...props}, props?.children ?? startRenderComponents(component.children) ?? [])
  })
}