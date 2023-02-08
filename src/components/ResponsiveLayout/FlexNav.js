import React from 'react';
import 'bulma/css/bulma.css'
import WindowDimensionsProvider from '../ResponsiveLayout/WindowDimensionsProvider/WindowDimensionsProvider.js';
import Content from '../ResponsiveLayout/Content/Content.js';
import items from '../../data.json'

const FlexNav = () => (
    <WindowDimensionsProvider>
      <div className="App">
        <Content items={items} />
      </div>
    </WindowDimensionsProvider>
  )

  export default FlexNav