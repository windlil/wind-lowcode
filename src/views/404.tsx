import { Button, Result } from 'antd'

const NotFound = () => {
  const Back = () => {
    history.back()
  }

  return (
    <div className='w-full h-full flex justify-center items-center'>
      <Result
        status='404'
        title='404'
        subTitle='该页面不存在，请返回'
        extra={<Button type='primary' onClick={Back}>返回</Button>}
      />
    </div>
  )
}

export default NotFound