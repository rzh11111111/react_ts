import { useState } from 'react';
export default function HelloWorld() {
  const [styleData] = useState({ color: 'red', fontSize: '16px' });
  const [isHead] = useState(true);
  const [className] = useState('title');
  return (
    <div className={`${className} ${isHead ? 'head' : ''}`} style={styleData}>
      hello world
    </div>
  );
}
