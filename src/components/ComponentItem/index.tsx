import { FC } from 'react'

interface ComponentItemProps {
  name: string
  desc: string
  onDragEnd?: any
}

const ComponentItem: FC<ComponentItemProps> = ({ name, onDragEnd, desc }) => {
  return (
    <div className='border border-dashed'>
      {desc}
    </div>
  )
}

export default ComponentItem