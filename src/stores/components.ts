import { Component } from '@/types/components'
import { defineStore } from './utils'


interface State {
  renderComponents: Component[]
  curComponent: Component | null
  addComponent: (component: Component, parentId?: number | string) => void
  setCurComponent: (currentId: number | string) => void
  updateComponentProps: (componentId: number | string, newProps: any) => void
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
    id: 2,
    name: 'Space',
    props: {
      size: 'middle'
    },
    children: [
      {
        id: 3,
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
  curComponent: null,

  addComponent(component, parentId?) {
    set(state => {
      if (parentId) {
        const parentNode = getNodeById(state.renderComponents, parentId)
        if (parentNode && !parentNode?.children) {
          parentNode.children = []
        }
        parentNode?.children?.push(component)
        return state
      }
      state.renderComponents.push(component)
      return state
    })
  },

  setCurComponent(currentId: string | number) {
    set(state => {
      const curComponent = currentId !== 0 ? getNodeById(state.renderComponents, currentId) : null
      state.curComponent = curComponent
      return state
    })
  },

  updateComponentProps(id: string | number, newProps: any) {
    set(state => {
      const component = getNodeById(state.renderComponents, id)
      if (component && component.props) {
        component.props = {
          ...component.props,
          ...newProps
        }
      }
      return state
    })
  }
}))

const getNodeById = (tree: Component[], id: number | string): Component | null => {
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i]
    if (node.id == id) {
      return node
    }
    if (node?.children?.length) {
      const result: null | Component = getNodeById(node.children, id)
      if (result) return result
    }
  }
  return null
}

export default useComponentStore
