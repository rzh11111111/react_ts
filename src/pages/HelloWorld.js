import { useState } from 'react';
export default function HelloWorld(props) {
  const [styleData] = useState({ color: 'red', fontSize: '16px' });
  const [isHead] = useState(true);
  const [className] = useState('title');
  const { title = 'hello world' } = props;
  return (
    <div className={`${className} ${isHead ? 'head' : ''}`} style={styleData}>
      hello world{title}
    </div>
  );
}
