import { Component } from '@/types/components'
import { defineStore } from './utils'


interface State {
  renderComponents: Component[]
  addComponent: (component: Component, parentId?: number | string) => void
}

const mockComponents: Component[] = [
  {
    id: 1,
    name: 'Button',
    props: {
      type: 'primary',
      children: 'Button1'
    },
    children: [],
  },
  {
    id: 3,
    name: 'Space',
    props: {

    },
    children: [
      {
        id: 2,
        name: 'Button',
        props: {
          type: 'default',
          children: 'Button2'
        },
        children: [],
      },
      {
        id: 4,
        name: 'Button',
        props: {
          type: 'default',
          children: 'Button2'
        },
        children: [],
      }
    ]
  },
]

const useComponentStore = defineStore<State>((set) => ({
  renderComponents: mockComponents,
  addComponent(component, parentId?) {
    set(state => {
      if (parentId) {
        const parentNode = getParentNodeByParentId(state.renderComponents, parentId)
        if (parentNode && !parentNode?.children) {
          parentNode.children = []
        }
        parentNode?.children?.push(component)
        return state
      }
      state.renderComponents.push(component)
      return state
    })
  }
}))

const getParentNodeByParentId = (tree: Component[], parentId: number | string): Component | null => {
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i]
    if (node.id === parentId) {
      return node
    }
    if (node?.children?.length) {
      const result: null | Component = getParentNodeByParentId(node.children, parentId)
      if (result) return result
    }
  }
  return null
}

export default useComponentStore
