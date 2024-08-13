import { Avatar } from 'antd'
import { GithubOutlined } from '@ant-design/icons'

const Header = () => {
  return (
    <header 
      className='w-full h-12 px-6 flex items-center justify-between border-b border-zinc-100'
    >
      <div className='flex gap-2 items-center'>
        <Avatar size={30} className='bg-zinc-200' src='https://api.dicebear.com/7.x/miniavs/svg?seed=1' />
        <span>Windlil</span>
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