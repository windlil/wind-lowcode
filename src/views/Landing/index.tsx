import useUserInfoStore from '@/stores/userinfo'
import { Button } from 'antd'

import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate()
  const { setAuth } = useUserInfoStore()

  const handleClickStart = () => {
    setAuth(true)
    navigate('/home')
  }

  return (
    <div className='w-full font-mono'>
      <div className='w-full h-96 mt-10 flex items-center justify-between px-20'>
        <div className='flex flex-col items-center'>
          <p className='text-5xl text-zinc-600 mb-6 font-bold'>低代码开发解决方案</p>
          <p className='text-xl text-zinc-500 mb-8'>通过简易操作快速创建企业级站点</p>
          <div className='h-12 w-[80%]'>
            <Button className='w-full h-full' type={'primary'} onClick={handleClickStart}>快速开始</Button>
          </div>
        </div>
        <div></div>
      </div>
      <div className='w-full flex justify-between px-20 mt-10'>

      </div>
    </div>
  )
}

export default Landing