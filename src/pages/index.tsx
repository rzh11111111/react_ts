import styles from './index.less';
import { useState } from 'react';
import HelloWorld from './HelloWorld.js';
export default function IndexPage() {
  const [styleData] = useState({ color: 'red', fontSize: '16px' });
  const [isHead] = useState(true);
  const [className] = useState('title');

  const handleClick = () => {
    console.log('点击事件');
  };
  return (
    <div>
      {/* 除了传递字符不用{}，其他都要 */}
      <h1 className={styles.title}>Page index</h1>
      <HelloWorld
        styleData={styleData}
        isHead={isHead}
        className={className}
        title="hello vue"
        num={1}
        onClick={() => {
          handleClick();
        }}
      />
    </div>
  );
}
