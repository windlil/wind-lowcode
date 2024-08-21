import { FC, useEffect } from 'react'
import useComponentStore from '@/stores/components'
import { CopyOutlined } from '@ant-design/icons'
import { SettingMap } from './settingMap'
import { Form, Input, Select } from 'antd'

const AttributeSetting:FC<any> = () => {
  const curComponent = useComponentStore(state => state.curComponent)
  const updateComponentProps = useComponentStore(state => state.updateComponentProps)
  const [form] = Form.useForm()

  const renderFormItem = (type: string, options?: any[]) => {
    if (type === 'input') {
      return <Input></Input>
    } else if (type === 'select') {
      return <Select options={options}></Select>
    }
  }

  const updateProps = (value: any) => {
    updateComponentProps(curComponent!.id, value)
  }

  useEffect(() => {
    form.setFieldsValue(curComponent?.props)
  }, [curComponent, form])

  return (
    <div className='px-2'>
      <div className='border-b pb-4 mb-4 border-zinc-200 '>
        <div className='w-full flex justify-between mb-1'>
          <div>
            <span>组件类型:</span>
            <span className='ml-2 text-zinc-500'>{curComponent?.name}</span>
          </div>
          <CopyOutlined color='#eee' />
        </div>
        <div className='w-full flex justify-between'>
          <div>
            <span>组件ID:</span>
            <span className='ml-2 text-zinc-500'>{curComponent?.id}</span>
          </div>
          <CopyOutlined color='#eee' />
        </div>
      </div>
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