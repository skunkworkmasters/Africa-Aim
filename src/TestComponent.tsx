import React, { useState, useEffect } from 'react';

const TestComponent: React.FC = () => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    console.log('TestComponent mounted');
    return () => console.log('TestComponent unmounted');
  }, []);
  
  return (
    <div className="fixed top-0 left-0 bg-blue-500 text-white p-4 z-50">
      <h2>Test Component</h2>
      <p>Count: {count}</p>
      <button 
        className="bg-white text-blue-500 px-4 py-2 rounded"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default TestComponent;
