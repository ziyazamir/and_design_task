import React, { useState } from 'react';
import Popup from './component/popup';
import BasicPopover from './component/mui_popover';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return <div className='mainDiv'>
    <button
      className='popup_btn'
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    >Click Me</button>
    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
    {isOpen && <Popup
      content={<>
        <div className="container">
          <div className="container__info">
          </div>
          <div className="container__profile">
            <label className="check_box">Flood Zone1
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label >
          </div >
        </div >
        <span className='down_arrow'></span>
      </>}
      handleClose={togglePopup}
    />}

    <BasicPopover />
  </div >
}

export default App;