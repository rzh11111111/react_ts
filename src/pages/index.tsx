import { useState } from 'react';
import HelloWorld from './HelloWorld.js';

export default function Index() {
  const [info, setInfo] = useState('hello world');
  const handleChangeTitle = (data: any) => {
    setInfo(data);
  };
  return <HelloWorld title={info} changeTitle={handleChangeTitle} />;
}
