import React, { useRef, useState, useEffect } from 'react';
import { Button, StyleProvider } from './components'

const App = () => {
  const containerRef = useRef();
  const [containerNode, setContainerNode] = useState(document.querySelector('#root'));

  useEffect(() => {
    setContainerNode(containerRef.current)
  }, [])

  return (
    <StyleProvider
      namespace="micro-frontend-app"
      container={containerNode}
      theme={{
        colors: {
          primary: '#BF4F74'
        }
      }}
    >
      <div ref={containerRef}>
        <h1>Micro frontend UI</h1>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
      </div>
    </StyleProvider>
  );
};

export default App;
