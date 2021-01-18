import React, { useState } from "react";
import {
  MenuRounded,
  EmailRounded,
  NotificationsNoneRounded,
  FlagRounded,
  AccountCircleRounded,
  SettingsApplicationsRounded,
} from "@material-ui/icons";
import "./MainAppBar.css";

const MainAppBar = () => {
  const initialCss = "main-app-bar-menu-icon";
  const initialMenuTypo = "AdminLTE";

  const [menuIconCss, setMenuIconCss] = useState(initialCss);
  const [menuTypo, setMenuTypo] = useState(initialMenuTypo);

  const menuMouseOver = (event) => {
    console.log(event.target)
    setMenuIconCss(menuIconCss + " main-app-bar-menu-mouse-over");
  };

  const menuMouseOut = () => {
    setMenuIconCss(initialCss);
  };

  const menuClick = () => {
    if (menuTypo === initialMenuTypo) {
      setMenuTypo("ALT");
    } else {
      setMenuTypo(initialMenuTypo);
    }
  };

  const onRightMenuMouseOver = (event) => {
    //event.preventDefault();
    event.stopPropagation();
    console.log(event.target)
  }

  return (
    <div className="main-app-bar-container">
      <div className="main-app-bar-left">
        <div className="main-app-bar-left-typo">{menuTypo}</div>
        <div
          onClick={menuClick}
          onMouseOut={menuMouseOut}
          onMouseOver={menuMouseOver}
          className={menuIconCss}
        >
          <MenuRounded />
        </div>
      </div>
      <div className="main-app-bar-right main-app-bar-menu-icon">
        <div>
          <div className="main-app-bar-right-email" onMouseOut={menuMouseOut} onMouseOver={onRightMenuMouseOver}>
            <EmailRounded />
          </div>
          <div className="main-app-bar-right-notifications" onMouseOut={menuMouseOut} onMouseOver={onRightMenuMouseOver}>
            <NotificationsNoneRounded />
          </div>
          <div className="main-app-bar-right-flag" onMouseOut={menuMouseOut} onMouseOver={onRightMenuMouseOver}>
            <FlagRounded />
          </div>
        </div>
        <div className="main-app-bar-right-account" onMouseOut={menuMouseOut} onMouseOver={onRightMenuMouseOver}>
          <AccountCircleRounded /> Ya Boss
        </div>
        <div className="main-app-bar-right-settings" onMouseOut={menuMouseOut} onMouseOver={onRightMenuMouseOver}>
          <SettingsApplicationsRounded />
        </div>
      </div>
    </div>
  );
};
export default MainAppBar;
