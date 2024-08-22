import { Tree } from 'antd'
import useComponentStore from '@/stores/components'

const PageTree = () => {
  const renderComponents = useComponentStore(state => state.renderComponents)
  const setCurComponent = useComponentStore(state => state.setCurComponent)
  const curComponent = useComponentStore(state => state.curComponent)

  const handleTreeSelect = (ids: any[]) => {
    const id = ids[0]
    setCurComponent(id)
  }

  return (
    <div className='w-full'>
      <Tree
        defaultExpandAll
        showLine
        fieldNames={{
          title: 'name',
          key: 'id'
        }}
        treeData={renderComponents as any}
        onSelect={handleTreeSelect}
      />
    </div>
  )
}

export default PageTree