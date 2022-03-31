import React from 'react';
import CountUp from 'react-countup';
import ReactVisibilitySensor from 'react-visibility-sensor';

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div className="content" />
      <ReactVisibilitySensor partialVisibility offset={{ bottom: 200 }}>
        {({ isVisible }) => (
          <div style={{ height: 100 }}>
            {isVisible ? <CountUp end={1000} /> : null}
          </div>
        )}
      </ReactVisibilitySensor>
    </div>
  );
}