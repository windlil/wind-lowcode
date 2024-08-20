import { Component } from '@/types/components'
import { defineStore } from './utils'


interface State {
  renderComponents: Component[]
  addComponent: (component: Component) => void
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

const useComponentStore = defineStore<State>(() => ({
  renderComponents: mockComponents,
  addComponent(component) {
    this.renderComponents.push(component)
  }
}))

export default useComponentStore
