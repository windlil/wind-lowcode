import { Tabs } from 'antd'
import useComponentStore from '@/stores/components'
import AttributStting from './components/AttributeSetting'
import EventSetting from './components/EventSetting'
import VariableSetting from './components/VariableSetting'
import { ReactNode } from 'react'
import { Empty } from 'antd'


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
  const curComponent = useComponentStore(state => state.curComponent)

  return (
    <div className='w-full h-full'>
      <div className='w-full px-4'>
        {curComponent ? (
          <Tabs
          defaultActiveKey='1'
          items={SettingItems}
        />
        ) :( 
        <Empty
          className='mt-40'
          image={Empty.PRESENTED_IMAGE_SIMPLE} 
          description={
          <div>
            暂未选中任何组件
          </div>
          }
        />
        )}
      </div>
    </div>
  )
}

export default Setting