import { Tabs } from 'antd'
import AttributStting from './components/AttributeSetting'
import EventSetting from './components/EventSetting'
import VariableSetting from './components/VariableSetting'
import { ReactNode } from 'react'

const SettingItems: {
  key: string,
  label: string,
  children: ReactNode,
  icon?: ReactNode
}[] = [
  {
    key: '1',
    label: '属性',
    children: <AttributStting />,
  },
  {
    key: '2',
    label: '事件',
    children: <EventSetting />,
  },
  {
    key: '3',
    label: '变量',
    children: <VariableSetting />,
  },
]

const Setting = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full px-4'>
        <Tabs
          defaultActiveKey='1'
          items={SettingItems}
        />
      </div>
    </div>
  )
}

export default Setting