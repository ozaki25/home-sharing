import React, { useState } from 'react';
import Headroom from 'react-headroom';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ArrowBackIosOutlined } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import CharIcon from 'components/atoms/CharIcon';
import SideMenu from 'components/organisms/SideMenu';

const styles = theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    zIndex: 1300,
  },
});

function NavigationBar({ title, authUser, back, history, firebase, classes }) {
  const [open, setOpen] = useState(false);
  const openSideMenu = () => setOpen(true);
  const closeSideMenu = () => setOpen(false);
  return (
    <Headroom className={classes.appBar} style={{ position: 'fixed' }}>
      <AppBar position="static" color="primary">
        <Toolbar
          style={{ paddingLeft: back ? '0' : '16px', paddingRight: '16px' }}
          disableGutters
        >
          {back && (
            <IconButton color="inherit" onClick={history.goBack}>
              <ArrowBackIosOutlined />
            </IconButton>
          )}
          <Typography variant="h6" color="inherit" style={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {authUser && (
            <CharIcon
              name={authUser.displayName}
              onClick={openSideMenu}
              small
            />
          )}
        </Toolbar>
        {authUser && (
          <SideMenu
            open={open}
            onOpen={openSideMenu}
            onClose={closeSideMenu}
            signout={firebase.doSignOut}
            history={history}
          />
        )}
      </AppBar>
    </Headroom>
  );
}

export default withStyles(styles)(NavigationBar);
