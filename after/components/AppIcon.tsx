import React from 'react'

const AppIcon = () => {
  return (
    <div className="App">
      <header className="App-header">
        <AppIcon url="/icons/fire.svg" size={1.15} margin={0} fill={IconFilter.primary} />
        <AppIcon url="/icons/double_arrow.svg" size={1.15} style={{ margin: "0 0 0 -0.8rem" }} fill={IconFilter.primary} />
        <span className="line orange" style={{ width: "50%" }}></span>
        <span className="line green" style={{ width: "50%" }}></span>
      </header>
    </div>
  )
}

export default AppIcon

