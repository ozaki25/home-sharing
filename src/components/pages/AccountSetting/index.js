import React, { useState } from 'react';
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  TextField,
  Typography,
} from '@material-ui/core';
import CharIcon from 'components/atoms/CharIcon';
import OverlaySpinner from 'components/molecules/OverlaySpinner';
import Container from 'components/templates/Container';

function AccountSetting({ history, firebase, authUser, setAuthUser }) {
  const { uid, displayName } = authUser;
  const [name, setName] = useState(displayName);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onChangeName = e => setName(e.target.value);

  const onClick = async () => {
    try {
      setLoading(true);
      const user = { uid, displayName: name };
      await setAuthUser(user);
      localStorage.setItem('authUser', JSON.stringify(user));
      setAuthUser(user);
      alert('更新しました');
    } catch (e) {
      setError(e.toString());
    } finally {
      setLoading(false);
    }
  };

  const invalid = name.trim() === '';

  return (
    <Container
      title="アカウント設定"
      history={history}
      firebase={firebase}
      authUser={authUser}
      back
    >
      <OverlaySpinner visible={loading} />
      {error && <Typography color="error">{error}</Typography>}
      <List>
        <ListItem>
          <ListItemIcon>
            <CharIcon name={authUser.displayName} />
          </ListItemIcon>
        </ListItem>
      </List>
      <form>
        <TextField
          label="名前"
          name="name"
          value={name}
          onChange={onChangeName}
          margin="dense"
          color="primary"
          fullWidth
          required
        />
        <br />
        <Button
          onClick={onClick}
          disabled={invalid}
          color="primary"
          variant="contained"
          fullWidth
        >
          更新する
        </Button>
      </form>
    </Container>
  );
}

AccountSetting.displayName = 'AccountSetting';

export default AccountSetting;
