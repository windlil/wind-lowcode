import Header from './header'
import { Button, Menu, MenuProps } from 'antd'
import { FC, ReactNode, useCallback, useEffect, useState } from 'react'
import {
  ApartmentOutlined,
  AppstoreOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PicLeftOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Outlet } from 'react-router-dom'
import { useRedirect } from '@/hooks/useRedirect'
import { useLocalStorage } from '@/utils/storage'
import { WINDCODE_CURRENT_ITEM } from '@/common'
import Auth from '@/components/Auth'

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '/home/app-list', icon: <ApartmentOutlined />, label: '应用列表' },
  { key: '/home/page-list', icon: <PicLeftOutlined />, label: '页面列表' },
  { key: '/home/component-list', icon: <AppstoreOutlined />, label: '组件列表' },
  { key: '/home/user', icon: <UserOutlined />, label: '个人中心' },
]

const HomeLayout: FC<{
  topBar?: ReactNode
}> = (props) => {
  const { topBar } = props
  const [collapsed, setCollapsed] = useState(false)
  const { redirect, navigate, pathname } = useRedirect('/home', '/home/app-list')
  const [selectedKeys, setSelectedKeys] = useState('')

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const handleClickMenuItem = (item: MenuItem) => {
    navigate(item!.key as string ?? '/landing')
    useLocalStorage.set(WINDCODE_CURRENT_ITEM, pathname)
  }

  const handleInitDefaultSelectedKey = useCallback(() => {
    const storagePath = useLocalStorage.get(WINDCODE_CURRENT_ITEM)
    if (selectedKeys !== storagePath) {
      setSelectedKeys(pathname)
    }
  }, [pathname, selectedKeys])

  useEffect(() => {
    redirect()
    handleInitDefaultSelectedKey()
  }, [redirect, handleInitDefaultSelectedKey])

  useEffect(() => {
    setSelectedKeys(pathname)
  }, [pathname])

  return (
    <Auth>
      <div className='w-full h-full flex flex-col'>
        <Header/>
        <div className='w-full flex-1 flex overflow-hidden'>
        <div>
          <Menu
            style={{height: '100%'}}
            selectedKeys={[selectedKeys]}
            mode='inline'
            inlineCollapsed={collapsed}
            items={items}
            onClick={handleClickMenuItem}
          />
        </div>
          <div className='w-full p-4'>
            <div className='h-full border rounded-lg'>
              <div className='flex justify-between border-b px-4 py-2'>
                <Button type='default' onClick={toggleCollapsed}>
                  {collapsed ?  <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                </Button>
                <div>
                  {topBar}
                </div>
              </div>
              <div className='h-full w-full flex gap-4 flex-wrap p-4'>
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Auth>
  )
}

export default HomeLayout