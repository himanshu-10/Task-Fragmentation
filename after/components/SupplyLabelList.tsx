import React from 'react';
import './SupplyLabelList.scss';


import AppIcon from './AppIcon.tsx';

const SupplyLabelList = ({ circulatingPercent, totalSupply, circulatingSupply, supplyList }) => {
  const burntPercent = 100 - circulatingPercent;

  return (
    <div className="supply_label_list">
      <div>
        <p className="supply_label">
          <span className="hyphen orange"></span>
          <span className="text">Burnt App Tokens</span>
          <span className="percent orange">
            {burntPercent.toFixed(2)}%
          </span>
        </p>
        <p className="supply_value">
          <AppIcon
            size={1.25}
            url={`/images/token/${walletChain?.nativeCurrency?.symbol}.svg`}
            fill={IconFilter.unset}
            margin={0}
          />
          {numberWithCommas(totalSupply - circulatingSupply)}
        </p>
        <div className="full_supply">
          Original App Token Initial Supply:
          {numberWithCommas(totalSupply)}
        </div>
      </div>
      <div>
        <p className="supply_label">
          <span className="hyphen green"></span>
          <span className="text">Circulating App Tokens</span>
          <span className="percent green">
            {circulatingPercent.toFixed(2)}%
          </span>
        </p>
        <p className="supply_value">
          <AppIcon
            size={1.25}
            url={`/images/token/${walletChain?.nativeCurrency?.symbol}.svg`}
            fill={IconFilter.unset}
            margin={0}
          />
          {numberWithCommas(circulatingSupply)}
        </p>
        {supplyList.map((s) => (
          <p key={s.chainId} className="supply_value mini">
            <AppIcon
              size={1.25}
              url={`/images/token/${
                chainTokenSymbols.get(s.chainId)?? "ETH"
              }.svg`}
              fill={IconFilter.unset}
              margin={0}
            />
            {numberWithCommas(s.circulatingSupply)}
          </p>
        ))}
      </div>
    </div>
  );
};