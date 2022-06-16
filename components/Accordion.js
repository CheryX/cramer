import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item" style={{
        width: '100%',
        border: '1px solid #000',
    }}>
      <div className="accordion-title" style={{
        cursor: 'pointer',
        padding: '10px',
        backgroundColor: isActive ? '#ccc' : '#eee',
        display: 'flex',
        justifyContent: 'space-between',
      }} onClick={() => setIsActive(!isActive)}>
        <div>{title} </div><div style={{
            border: '1px solid #000',
        }}>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content" style={{
        padding: '10px',
        backgroundColor: '#eee',
      }}>{children}</div>}
    </div>
  );
};

export default Accordion;
