import React from 'react';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  SwipeableDrawer,
} from '@material-ui/core';
import { AccountBox, ExitToApp, HomeRounded } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import CharIcon from 'components/atoms/CharIcon';
import ROUTES from 'constants/routes';
import useAuthUser from 'hooks/useAuthUser';

const styles = {
  list: {
    width: '250px',
  },
};

function SideMenu({ open, onOpen, onClose, signout, history, classes }) {
  const {
    authUser: { displayName },
    setAuthUser,
  } = useAuthUser();
  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={onClose}
      onOpen={onOpen}
    >
      <div tabIndex={0} onClick={onClose} onKeyDown={onClose}>
        <div className={classes.list}>
          <List>
            <ListItem>
              <ListItemIcon>
                <CharIcon name={displayName} />
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemText primary={displayName} />
            </ListItem>
          </List>
          <Divider />
          <List subheader={<ListSubheader>メニュー</ListSubheader>}>
            <ListItem onClick={() => history.push(ROUTES.Menu)} button>
              <ListItemIcon>
                <HomeRounded />
              </ListItemIcon>
              <ListItemText primary="ホーム" />
            </ListItem>
          </List>
          <Divider />
          <List subheader={<ListSubheader>設定</ListSubheader>}>
            <ListItem
              onClick={() => history.push(ROUTES.AccountSetting)}
              button
            >
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="アカウント設定" />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              onClick={() => {
                localStorage.removeItem('authUser');
                setAuthUser(null);
                signout();
              }}
              button
            >
              <ListItemIcon>
                <ExitToApp />
              </ListItemIcon>
              <ListItemText primary="ログアウト" />
            </ListItem>
          </List>
        </div>
      </div>
    </SwipeableDrawer>
  );
}

SideMenu.displayName = 'SideMenu';

export default withStyles(styles)(SideMenu);
