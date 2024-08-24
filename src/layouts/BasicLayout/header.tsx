import { Button } from 'antd'

const Header = () => {
  const goToPreview = () => {
    window.open('/preview')
  }

  const handleSave = () => {

  }

  return (
    <header className='w-full h-full flex items-center justify-between px-4'>
      <div></div>
      <div className='flex items-center  gap-4'>
        <Button onClick={goToPreview}>
          预览
        </Button>
        <Button type={'primary'} onClick={handleSave}>
          保存
        </Button>
      </div>
    </header>
  )
}

export default Header