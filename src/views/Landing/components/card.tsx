import { FC } from 'react'

interface CardProps {
  title: string
  desc: string
  icon: any
}

const Card: FC<CardProps> = ({
  title = 'title',
  desc = 'desc',
  icon = null
}) => {

  return (
    <div
      style={{
        transition: 'all 0.5s'
      }}
      className='w-72 p-4 border border-zinc-200
      rounded-xl shadow-md hover:shadow-2xl bg-white'
    >
      <div className='w-10 h-10 rounded-lg flex justify-center items-center bg-[#f9f9f9]'>
        {icon}
      </div>
      <p className='my-6 text-xl font-bold'>
        {title}
      </p>
      <p className='text-zinc-500 text-xs'>
        {desc}
      </p>
    </div>
  )
}

export default Card