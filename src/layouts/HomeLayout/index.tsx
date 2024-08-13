import Header from './header'
import { FC, ReactNode } from 'react'

const HomeLayout: FC<{
  children: ReactNode
}> = ({
  children
}) => {
  return (
    <div className='w-full h-full flex flex-col'>
      <Header/>
      <div className='w-full flex-1 flex overflow-hidden'>
        {children}
      </div>
    </div>
  )
}

export default HomeLayout