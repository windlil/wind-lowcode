
export interface Component {
  /**
   * 组件标识
   */
  id: number
  /**
   * 组件名称
   */
  name: string
  /**
   * 属性
   */
  props: any
  /**
   * 子组件
   */
  children?: Component[]
  /**
   * 父组件标识
   */
  parentId?: number
}

export const enum ComponentType {
  Button = 'Button',
  Space = 'Space',
}

export type RenderComponents = Component[]