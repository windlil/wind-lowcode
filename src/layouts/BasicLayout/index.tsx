import { Allotment } from 'allotment'
import 'allotment/dist/style.css'
import Auth from '@/components/Auth'
import Content from './content'
import Header from './header'
import Material from './material'
import Setting from './setting'

const BasicLayout = () => {
  return (
    <Auth>
      <div className='w-[100vw] h-[100vh] flex flex-col overflow-hidden'>
        <div className='w-full h-[50px] border-b'>
          <Header />
        </div>
        <Allotment>
          <Allotment.Pane preferredSize={270} minSize={270} maxSize={320}>
            <Material />
          </Allotment.Pane>
          <Allotment.Pane>
            <Content />
          </Allotment.Pane>
          <Allotment.Pane preferredSize={270} minSize={270} maxSize={320}>
            <Setting />
          </Allotment.Pane>
        </Allotment>
      </div>
    </Auth>
  )
}

export default BasicLayout