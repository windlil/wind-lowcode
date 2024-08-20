import ComponentItem from "@/components/ComponentItem"
import { ComponentType } from "@/types/components";

const Material = () => {
  const onDragEnd = (dropResult: any) => {
    console.log('dropResult',dropResult);
  }

  return (
    <div>
      <div className="flex p-[10px] px-[20px] gap-4 flex-wrap justify-between">
        <ComponentItem name={ComponentType['Button']} onDragEnd={onDragEnd} desc="按钮"></ComponentItem>
        <ComponentItem name={ComponentType['Space']} onDragEnd={onDragEnd} desc="间距"></ComponentItem>
      </div>
    </div>
  )
}

export default Material