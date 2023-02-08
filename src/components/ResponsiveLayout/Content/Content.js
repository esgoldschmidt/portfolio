import React from 'react'
import ResponsiveLayout from '../../ResponsiveLayout/ResponsiveLayout.js'
import MobileView from '../../ResponsiveLayout/MobileView/MobileView.js'
import DesktopView from '../../ResponsiveLayout/DesktopView/DesktopView.js'


const Content = ({ items }) => {
  return (
    <ResponsiveLayout
      breakPoint={643}
      renderDesktop={() => (
        <DesktopView items={items} />
      )}
      renderMobile={() => (
        <MobileView items={items} />
      )}
    />
  )
}

export default Content
  