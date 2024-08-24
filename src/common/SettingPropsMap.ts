import { ComponentType } from '@/types/components'

export const SettingPropsMap: Record<string, any[]> = {
  [ComponentType.Button]: [
    {
      name: 'type',
      label: '按钮类型',
      type: 'select',
      options: [
        {
          label: '主要按钮',
          value: 'primary',
        },
        {
          label: '次要按钮',
          value: 'default',
        },
        {
          label: '文本按钮',
          value: 'text'
        },
        {
          label: '虚线按钮',
          value: 'dashed'
        },
        {
          label: '链接按钮',
          value: 'link'
        }
      ]
    },
    {
      name: 'children',
      label: '按钮文本',
      type: 'input'
    },
    {
      name: 'danger',
      label: '危险状态',
      type: 'switch'
    }
  ],
  [ComponentType.Space]: [
    {
      name: 'size',
      label: '容器间距',
      type: 'select',
      options: [
        {
          label: '大',
          value: 'large'
        },
        {
          label: '中',
          value: 'middle'
        },
        {
          label: '小',
          value: 'small'
        },
      ]
    }
  ]
}