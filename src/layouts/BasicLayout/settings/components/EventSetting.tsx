import { Button, Drawer } from 'antd'
import { useState } from 'react'

const EventSetting = () => {
  const [showDrawer, setShowDrawer] = useState(false)

  const onClose = () => {
    setShowDrawer(false)
  }

  return (
    <>
      <Drawer
        title='Basic Drawer'
        placement={'bottom'}
        closable={false}
        open={showDrawer}
        height={'100vh'}
        extra={<div className='flex items-center gap-4'>
          <Button type='primary'>保存</Button>
          <Button onClick={onClose}>返回</Button>
        </div>}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
      <div>
        <div>
          <Button type='primary' className='w-full' onClick={() => setShowDrawer(true)}>添加事件流</Button>
        </div>
      </div>
    </>
  )
}

export default EventSetting