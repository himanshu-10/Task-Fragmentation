import * as React from 'react';

const BurnButtonBar: React.FC<{ children }> = ({ children }) => {
  return (
    <div className="burn_bar">
      {children}
    </div>
  );
};