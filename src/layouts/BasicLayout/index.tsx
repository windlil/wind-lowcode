import { Allotment } from 'allotment'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import 'allotment/dist/style.css'
import Auth from '@/components/Auth'
import Content from './content'
import Header from './header'
import Material from './material'
import Setting from './setting'

const BasicLayout = () => {
  return (
    <Auth>
      <DndProvider backend={HTML5Backend}>
        <div className='w-[100vw] h-[100vh] flex flex-col overflow-hidden'>
          <div className='w-full h-[50px] border-b'>
            <Header />
          </div>
          <Allotment>
            <Allotment.Pane preferredSize={260} minSize={260} maxSize={290}>
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
      </DndProvider>
    </Auth>
  )
}

export default BasicLayout