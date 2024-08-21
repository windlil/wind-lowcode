import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { Menu, MenuProps } from 'antd'
import Auth from '@/components/Auth'
import Content from './content'
import Header from './header'
import Material from './components/Material'
import PageTree from './components/PageTree'
import Setting from './setting'
import {
  AppstoreOutlined,
  ClusterOutlined,  
  FunctionOutlined,
  ApartmentOutlined,
  ClockCircleOutlined,
  RetweetOutlined,
  ItalicOutlined
 } from '@ant-design/icons'
import { useCallback, useState } from 'react'

type MenuItem = Required<MenuProps>['items'][number]

const itemsLabelMap: Record<string, string> = {
  'component': '组件列表',
  'variable': '页面变量',
  'events': '页面事件',
  'api': '页面接口',
  'json': '页面JSON',
  'tree': '页面大纲',
  'history': '操作历史',
}

const items: MenuItem[] = [
  { key: 'component', icon: <AppstoreOutlined />, label: itemsLabelMap['component'] },
  { key: 'variable', icon: <ItalicOutlined />, label: itemsLabelMap['variable'] },
  { key: 'events', icon: <FunctionOutlined />, label: itemsLabelMap['events'] },
  { key: 'api', icon: <RetweetOutlined />, label: itemsLabelMap['api'] },
  { key: 'json', icon: <ClusterOutlined />, label: itemsLabelMap['json'] },
  { key: 'tree', icon: <ApartmentOutlined />, label: itemsLabelMap['tree'] },
  { key: 'history', icon: <ClockCircleOutlined />, label: itemsLabelMap['history'] },
]

const BasicLayout = () => {
  const [currentKey, setCurrentKey] = useState('component')
  const [leftContainerTitle, setLeftContainerTitle] = useState('组件列表')

  const handleClickMenuItem = useCallback((item: any) => {
    setLeftContainerTitle(itemsLabelMap[item.key])
    setCurrentKey((item as any).key)
  }, [])

  const renderLeftContainer = () => {
    switch (currentKey) {
      case 'component':
        return <Material />
      case 'tree':
        return <PageTree />
    }
    return <Material />
  }

  return (
    <Auth>
      <DndProvider backend={HTML5Backend}>
        <div className='w-[100vw] h-[100vh] flex flex-col overflow-hidden'>
          <div className='w-full h-[6vh] border-b'>
            <Header />
          </div>
          <div className='flex h-[95vh]'>
            <div className='w-[340px] border-r flex'>
              <Menu
                style={{height: '100%', width: '25%', padding: '5px'}}
                mode='inline'
                inlineCollapsed={true}
                items={items}
                onClick={handleClickMenuItem}
                selectedKeys={[currentKey]}
              />
              <div className='flex-1'>
                <p className='px-4 mt-4 text-sm font-bold'>
                  {leftContainerTitle}
                </p>
                <div className='flex p-[10px] px-[20px] gap-4 flex-wrap justify-center'>
                  {renderLeftContainer()}
                </div>
              </div>
            </div>
            <div className='flex-1 p-6 bg-[#f5f5f5]'>
              <Content/>
            </div>
            <div className='w-[240px] border-l'>
              <Setting/>
            </div>
          </div>
        </div>
      </DndProvider>
    </Auth>
  )
}

export default BasicLayout