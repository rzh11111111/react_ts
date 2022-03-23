import React from 'react';
export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="title head" style={{ color: 'red', fontSize: '16px' }}>
        hello world
      </div>
    );
  }
}
