import { Avatar, Dropdown, MenuProps, Space } from 'antd'
import { DownOutlined, GithubOutlined } from '@ant-design/icons'
import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from '@/utils/storage'

const items: MenuProps['items'] = [
  {
    key: '1',
    danger: true,
    icon: <LogOut className='w-4 h-4' />,
    label: '退出登录',
  },
]

const Header = () => {
  const navigate = useNavigate()

  const handleClickDrowMenuItem: MenuProps['onClick'] = ({ key }) => {
    if (key === '1') {
      useLocalStorage.remove('WINDLOWCODE_AUTH')
      useLocalStorage.remove('WINDCODE_CURRENT_ITEM')
      navigate('/')
    }
  }

  return (
    <header 
      className='w-full h-12 px-6 flex items-center justify-between border-b border-zinc-100'
    >
      <div className='flex gap-2 items-center'>
        <Dropdown menu={{ items, onClick: handleClickDrowMenuItem  }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space className='cursor-pointer'>
              <Avatar size={30} className='bg-zinc-200' src='https://api.dicebear.com/7.x/miniavs/svg?seed=1' />
              <span>Windlil</span>
              <DownOutlined className='h-2 w-2 text-zinc-500' />
            </Space>
          </a>
        </Dropdown>
      </div>
      <div>
        <div className='flex gap-2 cursor-pointer text-zinc-500 hover:text-black'>
          <GithubOutlined />
          <span className='font-bold'>Github</span>
        </div>
      </div>
    </header>
  )
}

export default Header