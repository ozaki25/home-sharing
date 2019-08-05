import React from 'react';
import Headroom from 'react-headroom';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ArrowBackIosOutlined } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    zIndex: 1300,
  },
});

function NavigationBar({ title, history, back, classes }) {
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
        </Toolbar>
      </AppBar>
    </Headroom>
  );
}

export default withStyles(styles)(NavigationBar);
