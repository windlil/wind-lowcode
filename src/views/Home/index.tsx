import HomeLayout from '@/layouts/HomeLayout'
import { Button, Menu, MenuProps } from 'antd'
import Card from './components/card'
import { useState } from 'react'
import {
  ApartmentOutlined,
  AppstoreOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PicLeftOutlined,
  UserOutlined,
} from '@ant-design/icons';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '1', icon: <ApartmentOutlined />, label: '应用列表' },
  { key: '2', icon: <PicLeftOutlined />, label: '页面列表' },
  { key: '3', icon: <AppstoreOutlined />, label: '组件列表' },
  { key: '4', icon: <UserOutlined />, label: '个人中心' },
];

const Home = () => {
  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <HomeLayout>
      <div>
        <Menu
          style={{height: '100%'}}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          inlineCollapsed={collapsed}
          items={items}
        />
      </div>
      <div className='w-full p-4'>
        <div className='h-full border rounded-lg'>
          <div className='flex justify-between border-b px-4 py-2'>
            <Button type='default' onClick={toggleCollapsed}>
              {collapsed ?  <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
            <Button type={'primary'}>新建应用</Button>
          </div>
          <div className='h-full w-full overflow-scroll flex gap-4 flex-wrap p-4'>
            {new Array(9).fill(1).map(item => <Card title='应用1' desc='const a = abc新建英语呢const a = abc新建英语呢const a = abc新建英语呢const a = abc新建英语呢const a = abc新建英语呢'  />)}
          </div>
        </div>
      </div>
    </HomeLayout>
  )
}

export default Home