import { FC, useEffect } from 'react'
import useComponentStore from '@/stores/components'
import { CopyOutlined } from '@ant-design/icons'
import { SettingMap } from '@/common/index'
import { Form, message } from 'antd'
import copy from 'copy-to-clipboard'
import { renderFormItem } from '@/core/renderFormItem'

const AttributeSetting:FC<any> = () => {
  const curComponent = useComponentStore(state => state.curComponent)
  const updateComponentProps = useComponentStore(state => state.updateComponentProps)
  const [form] = Form.useForm()
  const [messageApi, contextHolder] = message.useMessage()


  const copyValue = (value: string) => {
    copy(value)
    messageApi.success('成功复制！')
  }

  const updateProps = (value: any) => {
    updateComponentProps(curComponent!.id, value)
  }

  useEffect(() => {
    form.setFieldsValue(curComponent?.props)
  }, [curComponent, form])

  return (
    <div className='px-2'>
      {contextHolder}
      {curComponent &&  (
        <div className='border-b pb-4 mb-4 border-zinc-200 '>
          <div className='w-full flex justify-between mb-1'>
            <div>
              <span>组件类型:</span>
              <span className='ml-2 text-zinc-500'>{curComponent?.name}</span>
            </div>
            <CopyOutlined color='#eee' onClick={() => copyValue(curComponent.name)} />
          </div>
          <div className='w-full flex justify-between'>
            <div>
              <span>组件ID:</span>
              <span className='ml-2 text-zinc-500'>{curComponent?.id}</span>
            </div>
            <CopyOutlined color='#eee' onClick={() => copyValue(curComponent.id as any)} />
          </div>
        </div>
      )}
      <Form form={form} onValuesChange={updateProps}>
        {curComponent && SettingMap[curComponent.name].map((setting: any) => {
          return (
            <Form.Item label={setting.label} name={setting.name} key={setting.name}>
              {renderFormItem(setting?.type, setting?.options)}
            </Form.Item>
          )
        })}
      </Form>
    </div>
  )
}

export default AttributeSetting