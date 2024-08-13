import { useNavigate, Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Github } from 'lucide-react'
import styles from './index.module.less'

interface TopMenuItem {
  id: number
  name: string
  path: string
}

const Layout = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const topMenu: TopMenuItem[] = [
    {
      id: 0,
      name: '首页',
      path: '/landing'
    },
    {
      id: 1,
      name: '快速开始',
      path: '/how'
    },
    {
      id: 2,
      name: '关于我们',
      path: '/about'
    }
  ]

  const handleClickTopMenuItem = (item: TopMenuItem) => {
    if (location.pathname !== item.path) navigate(item.path)
  }

  /**
   * redirect to langding page
   */
  useEffect(() => {
    if (location.pathname === '/') navigate('/landing')
  }, [location.pathname, navigate])

  return (
    <div className={styles.main}>
      <header className='transition-all w-full h-16 flex justify-between items-center px-14 border-b border-zinc-100 select-none'>
        <h1 className='font-bold text-xl'>
          WindLowcode
        </h1>
        <div>
          <ul className='flex gap-10 text-zinc-600'>
            {topMenu.map(item => 
              <li 
                key={item.id} 
                className='cursor-pointer hover:text-black'
                onClick={() => handleClickTopMenuItem(item)}
              >
                {item.name}
              </li>
            )}
          </ul>
        </div>
        <div className='flex gap-2 cursor-pointer text-zinc-700 hover:text-black'>
          <Github />
          <span className='font-bold'>Github</span>
        </div>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  )
}

export default Layout