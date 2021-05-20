import React,{useState,useEffect} from 'react';

// 组件属性定义（可以自行扩展）:
interface InputProps {
  // 当前的 value 值
  value: string;
  // 初始化的 value 值
  defaultValue?: string;
  // 发生改变的时候触发的回调
  onChange?: (value: string) => any;
  // 最大长度
  maxLength?: number;
}

// 请实现 (class 方式 和 hook 方式二选一)
// 组件样式可以略过，但是要有合理的 DOM 结构

export default function Asd(props:InputProps){
  let [val,setVal]=useState(props.defaultValue)
  useEffect(()=>{
    setVal(props.value)
  },[props.value])
  const change=(e)=>{
    if(e.target.value.length>props.maxLength){
      return
    }
    setVal(e.target.value)
    props.onChange(e)
  }
  return(
    <span>
      <input value={val} onChange={change} />
      <span className="limited">{val.length}/{props.maxLength}</span>
    </span>
  )
}