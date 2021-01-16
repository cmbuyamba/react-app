import React from "react";
import { AppBar, Typography, Toolbar, CssBaseline } from "@material-ui/core";
import { MenuRounded } from '@material-ui/icons';
import './MainAppBar.css';

const MainAppBar = () => {
  return (
      <div>
         <CssBaseline />
          <AppBar position="static" className="main-app-bar-container">
            <Toolbar>
              <Typography variant="h5">AdminLTE</Typography>
            </Toolbar>
            <div className="main-app-bar-menu-icon"><MenuRounded /></div>
          </AppBar> 
      </div>
  )
}
export default MainAppBar;
