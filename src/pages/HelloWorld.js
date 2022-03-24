import { useState } from 'react';
export default function HelloWorld() {
  const [title, setTitle] = useState('hello world');
  const [className, setClassName] = useState('title');
  //   在React中称内部数据为state，使用useState(param)定义一个state时，可以通过参数param设置state的默认值，
  // 其返回一个数组，数组的第一个值是state，数组的第二个值是改变state的函数，可以调用该函数来改变state。
  // 另外用useState定义的数据是响应式的，若页面有使用该数据，该数据改变后页面会重新渲染。

  const handleClick = () => {
    setTitle('hello react');
    setClassName('title active');
  };
  return (
    <div className={className} onClick={handleClick}>
      {className}
      {title}
    </div>
  );
}
