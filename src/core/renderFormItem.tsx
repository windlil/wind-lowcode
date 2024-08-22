import { Input, Select, Switch } from "antd"

export const renderFormItem = (type: string, options?: any[]) => {
  if (type === 'input') {
    return <Input></Input>
  } else if (type === 'select') {
    return <Select options={options}></Select>
  } else if (type === 'switch') {
    return <Switch></Switch>
  }
}