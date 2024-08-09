import { startRenderComponents } from '@/core/render'
import useComponentStore from '@/stores/components'

const Content = () => {
  const { renderComponents } = useComponentStore()

  return (
    <div className='w-full h-full p-6'>
      {startRenderComponents(renderComponents)}
    </div>
  )
}

export default Content