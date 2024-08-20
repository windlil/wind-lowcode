import ComponentItem from '@/components/ComponentItem'
import { ComponentType } from '@/types/components'
import useComponentStore from '@/stores/components'

const Material = () => {
  const addComponent = useComponentStore(state => state.addComponent)

  const onDragEnd = (dropResult: any) => {
    addComponent({
      id: Math.random(),
      name: dropResult.name,
      props: dropResult.props
    }, dropResult?.id)
  }

  return (
    <div>
      <div className='flex p-[10px] px-[20px] gap-4 flex-wrap justify-between'>
        <ComponentItem name={ComponentType['Button']} onDragEnd={onDragEnd} desc='按钮'></ComponentItem>
        <ComponentItem name={ComponentType['Space']} onDragEnd={onDragEnd} desc='间距'></ComponentItem>
      </div>
    </div>
  )
}

export default Material