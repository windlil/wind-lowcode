import { Button } from 'antd'
import { Terminal, ChevronsUp, Box } from 'lucide-react'
import Card from './components/card'
import { useNavigate } from 'react-router-dom'

const Landing = () => {
  const navigate = useNavigate()

  const cardList: {
    title: string
    desc: string
    icon: any
  }[] = [
    {
      title: '低代码',
      desc: '通过拖拽样式进行开发',
      icon: <Terminal size={24} />
    },
    {
      title: '个性化',
      desc: '支持自定义主题',
      icon: <ChevronsUp size={24} />
    },
    {
      title: '功能强大',
      desc: '提供自定义组件开发功能',
      icon: <Box size={24} />
    },
    {
      title: '测试',
      desc: '编程小白也能轻松创建属于自己的网站',
      icon: <Terminal size={24} />
    },
  ]

  const handleClickStart = () => {
    navigate('/home')
  }

  return (
    <div className='w-full'>
      <div className='w-full h-96 mt-10 flex items-center justify-between px-20'>
        <div className='w-1/2 h-full border rounded-lg overflow-hidden'>
          <img className='w-full h-full' src='home.png' />
        </div>
        <div className='flex flex-col items-center'>
          <p className='text-5xl text-zinc-600 mb-6 font-bold'>低代码开发解决方案</p>
          <p className='text-xl text-zinc-500 mb-8'>🚀通过简易操作快速创建企业级站点</p>
          <div className='h-10 w-[65%]'>
            <Button className='w-full h-full' type={'primary'} onClick={handleClickStart}>快速开始</Button>
          </div>
        </div>
      </div>
      <div className='w-full flex justify-between px-20 mt-10'>
        {cardList.map((item, index) => {
          return <Card key={index} title={item.title} desc={item.desc} icon={item.icon}/>
        })}
      </div>
    </div>
  )
}

export default Landing