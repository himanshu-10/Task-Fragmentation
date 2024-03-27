import React from 'react';
import AppIcon from 'components/AppIcon';


const SupplyBar = ({ circulatingPercent, totalSupply, circulatingSupply }) => {
  const burntPercent = 100 - circulatingPercent;

  return (
    <div className="supply_bar">
      <AppIcon
        url="/icons/fire.svg"
        size={1.15}
        margin={0}
        fill={IconFilter.primary}
      />
      <AppIcon
        url="/icons/double_arrow.svg"
        size={1.15}
        style={{
          margin: "0 0 0 -0.8rem",
        }}
        fill={IconFilter.primary}
      />
      <span
        className="line orange"
        style={{ width: `${burntPercent}%` }}
      ></span>
      <span
        className="line green"
        style={{ width: `${circulatingPercent}%` }}
      ></span>
    </div>
  );
};